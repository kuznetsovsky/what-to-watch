// Core
import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';

// Props
export type VideoPlayerProps = {
  src: string;
  isPlaying: boolean;
} & DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
