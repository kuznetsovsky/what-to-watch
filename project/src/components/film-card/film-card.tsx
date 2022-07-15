// Core
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

// Others
import { FilmCardProps } from './film-card.props';

// Component
export default function FilmCard({
  film,
  setActivePlayerId,
  renderPlayer,
}: FilmCardProps): JSX.Element {
  const { id, name, preview, videoSrc } = film;

  return (
    <article
      onMouseEnter={(event: MouseEvent) => setActivePlayerId(id)}
      onMouseLeave={(event: MouseEvent) => setActivePlayerId(null)}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        {renderPlayer(videoSrc, id, { poster: preview })}
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
