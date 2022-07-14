// Core
import { useState } from 'react';

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
}: FilmsListProps): JSX.Element => {
  const [, setSelectedFilm] = useState<string | null>(null);

  const changeSelectedFilm = (id: string | null) => {
    setSelectedFilm(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          changeSelectedFilm={changeSelectedFilm}
        />
      ))}
    </div>
  );
};

export default FilmsList;
