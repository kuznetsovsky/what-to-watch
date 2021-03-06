/* eslint-disable jsx-a11y/anchor-is-valid */

// Others
import Logo from '../../components/logo/logo';
import FilmsList from '../../components/films-list/films-list';
import { favorites } from '../../mocks/favorites';
import { FilmsType } from '../../types/film-types';

// Props
type MyListPageProps = {
  favoritesFilms: FilmsType;
};

// Component
const FavoritesPage = ({
  favoritesFilms
}: MyListPageProps): JSX.Element => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />

      <h1 className="page-title user-page__title">My list</h1>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmsList films={favoritesFilms} />
    </section>

    <footer className="page-footer">
      <Logo light />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

// Default Props
FavoritesPage.defaultProps = {
  favoritesFilms: favorites,
};

// Export
export default FavoritesPage;
