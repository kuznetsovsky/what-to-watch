// Core
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

// Others
import { FilmCardProps } from './film-card.props';
import VideoPlayer from '../video-player/video-player';

// Component
export default function FilmCard({
  film,
  selectFilmId,
  changeSelectFilmId
}: FilmCardProps): JSX.Element {
  const { id, name, preview, videoSrc } = film;

  return (
    <article
      onMouseEnter={(event: MouseEvent) => changeSelectFilmId(id)}
      onMouseLeave={(event: MouseEvent) => changeSelectFilmId(null)}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer
          width="280"
          height="175"
          isPlaying={selectFilmId === id}
          poster={preview}
          src={videoSrc}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}`}
          className="small-film-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}
