// Core
import { MouseEvent } from 'react';

// Others
import { FilmType } from '../../types/film-types';

// Types
type SmallFilmCardProps = {
  film: FilmType;
  changeSelectedFilm: (id: string | null) => void;
}

// Component
const FilmCard = ({
  film,
  changeSelectedFilm
}: SmallFilmCardProps): JSX.Element => {

  const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    changeSelectedFilm(film.id);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    changeSelectedFilm(null);
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={film.preview} alt="" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {film.name}
        </a>
      </h3>
    </article>
  );
};

export default FilmCard;
