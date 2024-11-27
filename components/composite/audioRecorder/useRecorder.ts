import { ref, onUnmounted } from 'vue'
import type { AudioRecorderState } from './types'

export function useRecorder() {
    const state = ref<AudioRecorderState>({
        isRecording: false,
        isPaused: false,
        duration: 0,
        blob: null,
        error: null,
        isPlaying: false
    })

    const mediaRecorder = ref<MediaRecorder | null>(null)
    const audioPlayer = ref<HTMLAudioElement | null>(null)
    let chunks: Blob[] = []
    let timer: ReturnType<typeof setInterval> | null = null
    let audioUrl: string | null = null
    let previousDuration = 0

    const initMediaRecorder = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            mediaRecorder.value = new MediaRecorder(stream)

            mediaRecorder.value.addEventListener('dataavailable', (e) => {
                chunks.push(e.data)
            })

            mediaRecorder.value.addEventListener('stop', async () => {
                const blob = new Blob(chunks, { type: 'audio/ogg' })
                state.value.blob = blob

                if (audioUrl) {
                    URL.revokeObjectURL(audioUrl)
                }
                audioUrl = URL.createObjectURL(blob)
                audioPlayer.value = new Audio(audioUrl)

                audioPlayer.value.addEventListener('loadedmetadata', () => {
                    if (audioPlayer.value) {
                        state.value.duration = previousDuration + audioPlayer.value.duration
                    }
                })

                audioPlayer.value.addEventListener('ended', () => {
                    state.value.isPlaying = false
                })
            })

            return mediaRecorder.value
        } catch (err) {
            console.error('Media recorder init error:', err)
            throw err
        }
    }

    const startRecording = async () => {
        try {
            chunks = []
            const recorder = await initMediaRecorder()
            state.value.isRecording = true
            state.value.error = null
            recorder.start(1000)
            startTimer()
        } catch (err) {
            state.value.error = 'Microphone access denied'
            console.error('Recording start error:', err)
        }
    }

    const stopRecording = () => {
        if (mediaRecorder.value && state.value.isRecording) {
            mediaRecorder.value.stop()
            state.value.isRecording = false
            state.value.isPaused = false
            stopTimer()
            mediaRecorder.value.stream.getTracks().forEach(track => track.stop())
        }
    }

    const appendRecording = async () => {
        if (state.value.blob) {
            try {
                // Store existing audio
                const existingBlob = state.value.blob
                previousDuration = audioPlayer.value?.duration || 0

                // Initialize new recording
                const recorder = await initMediaRecorder()
                state.value.isRecording = true
                state.value.isPaused = false

                // Preserve existing audio
                const existingAudio = await existingBlob.arrayBuffer()
                chunks = [new Blob([existingAudio], { type: 'audio/ogg' })]

                recorder.start(1000)
                startTimer()
            } catch (err) {
                state.value.error = 'Failed to append recording'
                console.error('Append recording error:', err)
            }
        }
    }

    const pauseRecording = () => {
        if (mediaRecorder.value && state.value.isRecording) {
            mediaRecorder.value.pause()
            state.value.isPaused = true
            stopTimer()
        }
    }

    const resumeRecording = () => {
        if (mediaRecorder.value && state.value.isPaused) {
            mediaRecorder.value.resume()
            state.value.isPaused = false
            startTimer()
        }
    }

    const eraseRecording = () => {
        stopPlayback()
        if (mediaRecorder.value && state.value.isRecording) {
            stopRecording()
        }
        state.value.duration = 0
        state.value.blob = null
        state.value.error = null
        chunks = []
        previousDuration = 0

        if (audioPlayer.value) {
            audioPlayer.value.pause()
            audioPlayer.value = null
        }
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl)
            audioUrl = null
        }
    }

    const playRecording = () => {
        if (state.value.blob && audioPlayer.value) {
            audioPlayer.value.play()
            state.value.isPlaying = true
        }
    }

    const stopPlayback = () => {
        if (audioPlayer.value) {
            audioPlayer.value.pause()
            audioPlayer.value.currentTime = 0
            state.value.isPlaying = false
        }
    }

    const setCurrentTime = (time: number) => {
        if (audioPlayer.value && !isNaN(time) && isFinite(time)) {
            audioPlayer.value.currentTime = Math.max(0, Math.min(time, audioPlayer.value.duration))
        }
    }

    const startTimer = () => {
        stopTimer()
        timer = setInterval(() => {
            if (state.value.isRecording && !state.value.isPaused) {
                state.value.duration += 1
            }
        }, 1000)
    }

    const stopTimer = () => {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    }

    onUnmounted(() => {
        if (mediaRecorder.value && state.value.isRecording) {
            stopRecording()
        }
        if (audioPlayer.value) {
            audioPlayer.value.pause()
            audioPlayer.value = null
        }
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl)
            audioUrl = null
        }
        stopTimer()
    })

    return {
        state,
        audioPlayer,
        startRecording,
        stopRecording,
        appendRecording,
        pauseRecording,
        resumeRecording,
        eraseRecording,
        playRecording,
        stopPlayback,
        setCurrentTime
    }
}