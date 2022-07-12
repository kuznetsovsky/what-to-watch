// Types
type SmallFilmCardProps = {
  film: {
    id: string;
    name: string;
    preview: string;
  }
}

// Component
const SmallFilmCard = ({
  film
}: SmallFilmCardProps): JSX.Element => (
  <article className="small-film-card catalog__films-card">
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

export default SmallFilmCard;
