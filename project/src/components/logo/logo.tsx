/* eslint-disable jsx-a11y/anchor-is-valid */

// Core
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

// Others
import { AppRoute } from '../../consts';

// Props
type LogoProps = {
  light?: boolean;
}

// Component
const Logo = ({
  light = false
}: LogoProps): JSX.Element => {
  const location = useLocation();

  if (location.pathname === AppRoute.Root) {
    return (
      <div className="logo">
        <a
          className={cn('logo__link', {
            'logo__link--light': light === true,
          })}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    );
  }

  return (
    <div className="logo">
      <Link
        to={AppRoute.Root}
        className={cn('logo__link', {
          'logo__link--light': light === true,
        })}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
