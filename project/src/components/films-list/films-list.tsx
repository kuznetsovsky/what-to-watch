// Others
import FilmCard from '../film-card/film-card';
import { FilmsType } from '../../types/film-types';

// Props
type FilmsListProps = {
  films: FilmsType;
}

// Component
const FilmsList = ({
  films
}: FilmsListProps): JSX.Element => (
  <div className="catalog__films-list">
    {films.map((film) => <FilmCard key={film.id} film={film} />)}
  </div>
);

export default FilmsList;
