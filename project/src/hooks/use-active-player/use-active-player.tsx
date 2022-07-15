// Core
import { useState } from 'react';

// Others
import VideoPlayer from '../../components/video-player/video-player';

// Types
export type RenderPlayerOptional = {
  width?: string;
  height?: string;
  poster?: string;
}

// Hook
export const useActivePlayer = () => {
  const [activePlayerId, setActivePlayerId] = useState<string | null>(null);

  const renderPlayer = (
    src: string,
    id: string | null,
    options?: RenderPlayerOptional,
  ): JSX.Element => (
    <VideoPlayer
      src={src}
      width={options?.width || '280'}
      height={options?.height || '175'}
      poster={options?.poster}
      isPlaying={activePlayerId === id}
    />
  );

  return { activePlayerId, setActivePlayerId, renderPlayer };
};
