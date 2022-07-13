// Core
import { Link } from 'react-router-dom';

// Others
import { AppRoute } from '../../consts';

// Component
const NotFoundPage = () => (
  <div className="user-page">
    <div
      className="sign-in user-page__content"
      style={{ lineHeight: '1.2', maxWidth: '600px' }}
    >
      <h1 style={{ textAlign: 'center' }}>404: Страница не найдена.</h1>
      <p><Link className='logo__link' style={{ width: 'auto' }} to={AppRoute.Root}>Вернутся на главную</Link></p>
    </div>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default NotFoundPage;
