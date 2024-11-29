import * as lamejs from '@breezystack/lamejs';

export interface AudioProcessor {
    getAudioContext: () => AudioContext;
    convertWavToMp3: (wavBlob: Blob) => Promise<Blob>;
    blobToAudioBuffer: (blob: Blob) => Promise<AudioBuffer>;
    mergeAudioBuffers: (buffers: AudioBuffer[]) => Promise<AudioBuffer>;
    normalizeAudioBuffer: (buffer: AudioBuffer, targetLevel: number) => AudioBuffer;
    audioBufferToWav: (buffer: AudioBuffer) => ArrayBuffer;
    audioBufferToBlob: (buffer: AudioBuffer) => Promise<Blob>;
    mergeAudioBlobs: (blobs: Blob[]) => Promise<Blob | null>;
    updateDurationFromBlob: (blob: Blob) => Promise<number>;
}

export const useDSP = (): AudioProcessor => {
    let audioContext: AudioContext | null = null;

    const getAudioContext = () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return audioContext;
    };

    const convertWavToMp3 = (wavBlob: Blob): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function () {
                const arrayBuffer = this.result;
                try {
                    // WAV decoder
                    // @ts-expect-error - Third-party type
                    const wavDecoder = lamejs.WavHeader.readHeader(new DataView(arrayBuffer as ArrayBuffer));
                    const wavSamples = new Int16Array(arrayBuffer as ArrayBuffer, wavDecoder.dataOffset, wavDecoder.dataLen / 2);
                    const mp3Encoder = new lamejs.Mp3Encoder(wavDecoder.channels, wavDecoder.sampleRate, 128);
                    const mp3Buffer = mp3Encoder.encodeBuffer(wavSamples);
                    const mp3Data = mp3Encoder.flush();
                    const mp3BufferWithHeader = new Uint8Array(mp3Buffer.length + mp3Data.length);
                    mp3BufferWithHeader.set(mp3Buffer, 0);
                    mp3BufferWithHeader.set(mp3Data, mp3Buffer.length);
                    const mp3Blob = new Blob([mp3BufferWithHeader], { type: 'audio/mp3' });
                    resolve(mp3Blob);
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.readAsArrayBuffer(wavBlob);
        });
    };

    const blobToAudioBuffer = async (blob: Blob): Promise<AudioBuffer> => {
        const ctx = getAudioContext();
        const arrayBuffer = await blob.arrayBuffer();
        return await ctx.decodeAudioData(arrayBuffer);
    };

    const mergeAudioBuffers = async (buffers: AudioBuffer[]): Promise<AudioBuffer> => {
        const ctx = getAudioContext();
        const totalLength = buffers.reduce((sum, buffer) => sum + buffer.length, 0);
        const numberOfChannels = Math.max(...buffers.map(buffer => buffer.numberOfChannels));
        const sampleRate = buffers[0].sampleRate;
        const mergedBuffer = ctx.createBuffer(
            numberOfChannels,
            totalLength,
            sampleRate
        );

        let offset = 0;
        for (const buffer of buffers) {
            for (let channel = 0; channel < numberOfChannels; channel++) {
                const outputData = mergedBuffer.getChannelData(channel);
                if (channel < buffer.numberOfChannels) {
                    const inputData = buffer.getChannelData(channel);
                    outputData.set(inputData, offset);
                }
            }
            offset += buffer.length;
        }

        return normalizeAudioBuffer(mergedBuffer, 0.9);
    };

    const normalizeAudioBuffer = (buffer: AudioBuffer, targetLevel: number): AudioBuffer => {
        const ctx = getAudioContext();
        const normalizedBuffer = ctx.createBuffer(
            buffer.numberOfChannels,
            buffer.length,
            buffer.sampleRate
        );

        let maxAmplitude = 0;
        for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
            const data = buffer.getChannelData(channel);
            for (let i = 0; i < data.length; i++) {
                if (Math.abs(data[i]) > maxAmplitude) {
                    maxAmplitude = Math.abs(data[i]);
                }
            }
        }

        const gain = targetLevel / maxAmplitude;

        for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
            const inputData = buffer.getChannelData(channel);
            const outputData = normalizedBuffer.getChannelData(channel);
            for (let i = 0; i < inputData.length; i++) {
                outputData[i] = inputData[i] * gain;
            }
        }

        return normalizedBuffer;
    };

    const writeString = (view: DataView, offset: number, string: string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };

    const audioBufferToWav = (buffer: AudioBuffer): ArrayBuffer => {
        const numOfChan = buffer.numberOfChannels;
        const length = buffer.length * numOfChan * 2;
        const sampleRate = buffer.sampleRate;
        const buffer32 = new Float32Array(buffer.length * numOfChan);

        let offset = 0;
        for (let i = 0; i < buffer.numberOfChannels; i++) {
            buffer32.set(buffer.getChannelData(i), offset);
            offset += buffer.length;
        }

        const wavBytes = new ArrayBuffer(44 + length);
        const view = new DataView(wavBytes);

        writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + length, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numOfChan, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * 2 * numOfChan, true);
        view.setUint16(32, numOfChan * 2, true);
        view.setUint16(34, 16, true);
        writeString(view, 36, 'data');
        view.setUint32(40, length, true);

        const volume = 1;
        let index = 44;
        for (let i = 0; i < buffer32.length; i++) {
            view.setInt16(index, buffer32[i] * (0x7FFF * volume), true);
            index += 2;
        }

        return wavBytes;
    };

    const audioBufferToBlob = async (buffer: AudioBuffer): Promise<Blob> => {
        const wavData = audioBufferToWav(buffer);
        const wavBlob = new Blob([wavData], { type: 'audio/wav' });
        try {
            return await convertWavToMp3(wavBlob);
        } catch (error) {
            console.error('MP3 conversion failed, falling back to WAV:', error);
            return wavBlob;
        }
    };

    const mergeAudioBlobs = async (blobs: Blob[]): Promise<Blob | null> => {
        try {
            const buffers = await Promise.all(blobs.map(blobToAudioBuffer));
            const mergedBuffer = await mergeAudioBuffers(buffers);
            return await audioBufferToBlob(mergedBuffer);
        } catch (error) {
            console.error('Error merging audio:', error);
            return null;
        }
    };

    const updateDurationFromBlob = async (blob: Blob): Promise<number> => {
        try {
            const buffer = await blobToAudioBuffer(blob);
            return buffer.duration;
        } catch (error) {
            console.error('Error updating duration:', error);
            return 0;
        }
    };

    return {
        getAudioContext,
        convertWavToMp3,
        blobToAudioBuffer,
        mergeAudioBuffers,
        normalizeAudioBuffer,
        audioBufferToWav,
        audioBufferToBlob,
        mergeAudioBlobs,
        updateDurationFromBlob
    };
};

