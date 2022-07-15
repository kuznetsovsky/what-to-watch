// Others
import { FilmListProps } from './films-list.props';
import FilmCard from '../film-card/film-card';
import { useActivePlayer } from '../../hooks/use-active-player/use-active-player';

// Component
export default function FilmsList({
  films
}: FilmListProps): JSX.Element {
  const {
    setActivePlayerId,
    renderPlayer,
  } = useActivePlayer();

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          setActivePlayerId={setActivePlayerId}
          renderPlayer={renderPlayer}
        />
      ))}
    </div>
  );
}
