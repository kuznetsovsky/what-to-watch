// Core
import { useState } from 'react';

// Others
import { FilmListProps } from './films-list.props';
import { SelectFilmId } from '../../types/film-types';
import FilmCard from '../film-card/film-card';

// Component
export default function FilmsList({
  films
}: FilmListProps): JSX.Element {
  const [selectFilmId, setSelectFilmId] = useState<SelectFilmId>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          selectFilmId={selectFilmId}
          changeSelectFilmId={setSelectFilmId}
        />
      ))}
    </div>
  );
}
