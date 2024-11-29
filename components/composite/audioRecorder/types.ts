export interface AudioRecorderProps {
  maxDuration?: number
  class?: string
}

export interface AudioRecorderState {
  isRecording: boolean;
  isPaused: boolean;
  duration: number;
  blob: Blob | null;
  error: string | null;
  isPlaying: boolean;
  audioPlayer: HTMLAudioElement | null;
  initializing: boolean;
  currentTime: number;
  lastKnownPosition: number;
  wasPlaying: boolean;
  recordingElapsedTime: number;
  isDragging: boolean;
  isAppended: boolean;
  seekInProgress: boolean;
  totalDuration: number;
}
