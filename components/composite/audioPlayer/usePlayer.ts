import { ref, onMounted, onUnmounted } from 'vue'
import type { AudioPlayerState } from './types'

export function usePlayer(initialSrc?: string) {
    const state = ref<AudioPlayerState>({
        isPlaying: false,
        duration: 0,
        currentTime: 0,
        volume: 100,
        isMuted: false,
        error: null
    })

    const audioElement = ref<HTMLAudioElement | null>(null)
    const isDragging = ref(false)

    const initializeAudio = (src: string) => {
        audioElement.value = new Audio(src)

        audioElement.value.addEventListener('loadedmetadata', () => {
            if (audioElement.value) {
                state.value.duration = audioElement.value.duration
            }
        })

        audioElement.value.addEventListener('timeupdate', () => {
            if (audioElement.value && !isDragging.value) {
                state.value.currentTime = audioElement.value.currentTime
            }
        })

        audioElement.value.addEventListener('ended', () => {
            state.value.isPlaying = false
        })

        audioElement.value.addEventListener('error', (e) => {
            state.value.error = 'Error loading audio'
            console.error('Audio error:', e)
        })
    }

    const play = async () => {
        if (!audioElement.value) return

        try {
            await audioElement.value.play()
            state.value.isPlaying = true
        } catch (err) {
            state.value.error = 'Failed to play audio'
            console.error('Play error:', err)
        }
    }

    const pause = () => {
        if (!audioElement.value) return
        audioElement.value.pause()
        state.value.isPlaying = false
    }

    const setTime = (time: number) => {
        if (!audioElement.value) return
        audioElement.value.currentTime = time
        state.value.currentTime = time
    }

    const setVolume = (value: number) => {
        if (!audioElement.value) return
        const normalizedVolume = value / 100
        audioElement.value.volume = normalizedVolume
        state.value.volume = value
        state.value.isMuted = value === 0
    }

    const toggleMute = () => {
        if (!audioElement.value) return
        if (state.value.isMuted) {
            audioElement.value.volume = state.value.volume / 100
            state.value.isMuted = false
        } else {
            audioElement.value.volume = 0
            state.value.isMuted = true
        }
    }

    onMounted(() => {
        if (initialSrc) {
            initializeAudio(initialSrc)
        }
    })

    onUnmounted(() => {
        if (audioElement.value) {
            audioElement.value.pause()
            audioElement.value.src = ''
            audioElement.value.remove()
        }
    })

    return {
        state,
        isDragging,
        initializeAudio,
        play,
        pause,
        setTime,
        setVolume,
        toggleMute
    }
}