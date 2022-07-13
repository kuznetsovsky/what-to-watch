// Core
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Others
import { AppRoute } from '../../consts';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import FilmPage from '../../pages/film-page/film-page';
import PlayerPage from '../../pages/player-page/player-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';

// Types
type AppProps = {
  films: {
    id: string;
    name: string;
    preview: string;
  }[];
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
          element={<AddReviewPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<MyListPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
