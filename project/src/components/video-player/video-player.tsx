// Core
import { useRef, useEffect } from 'react';

// Others
import { VideoPlayerProps } from './video-player.props';

// Component
export default function VideoPlayer({
  src,
  isPlaying,
  ...rest
}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) { return; }

    if (isPlaying) {
      videoRef.current.play().then();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      {...rest}
      ref={videoRef}
      src={src}
    />
  );
}
