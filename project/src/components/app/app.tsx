// Core
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Others
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import FilmPage from '../../pages/film-page/film-page';
import PlayerPage from '../../pages/player-page/player-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import { FilmsType } from '../../types/film-types';

// Types
type AppProps = {
  films: FilmsType;
}

// Component
function App({
  films
}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage films={films} />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.Films}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
