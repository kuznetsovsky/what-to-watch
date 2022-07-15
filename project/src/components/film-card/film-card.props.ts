// Others
import { FilmType, SelectFilmId } from '../../types/film-types';

// Component
export type FilmCardProps = {
  film: FilmType;
  selectFilmId: SelectFilmId;
  changeSelectFilmId: (id: SelectFilmId) => void;
};
