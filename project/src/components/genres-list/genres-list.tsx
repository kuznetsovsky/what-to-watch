/* eslint-disable jsx-a11y/anchor-is-valid */

// Core
import { useState, MouseEvent } from 'react';
import cn from 'classnames';

// Others
import { FilmsGenres } from '../../consts';

// Component
export default function GenresList(): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState(FilmsGenres.AllGenres);

  return (
    <ul className="catalog__genres-list">
      {Object.values(FilmsGenres).map((genre) => (
        <li
          key={`genre-${genre}`}
          className={cn('catalog__genres-item', {
            'catalog__genres-item--active': selectedGenre === genre,
          })}
        >
          <a
            href="#"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              event.preventDefault();
              setSelectedGenre(genre);
            }}
            className="catalog__genres-link"
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
