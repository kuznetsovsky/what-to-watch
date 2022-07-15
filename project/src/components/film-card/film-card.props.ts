// Others
import { FilmType } from '../../types/film-types';
import { RenderPlayerOptional } from '../../hooks/use-active-player/use-active-player';

// Component
export type FilmCardProps = {
  film: FilmType;
  setActivePlayerId: (id: string | null) => void;
  renderPlayer: (src: string, id: string | null, options: RenderPlayerOptional) => JSX.Element;
};
