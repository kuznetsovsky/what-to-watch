// Core
import React from 'react';

// Others
import SmallFilmCard from '../small-film-card/small-film-card';
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
    {films.map((film) => <SmallFilmCard key={film.id} film={film} />)}
  </div>
);

export default FilmsList;
