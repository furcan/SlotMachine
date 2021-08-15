import { constants } from 'application/constants';

import 'presentation/components/layout/partials/header/Header.scss';


function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__container">
        <h1>{constants.app.name}</h1>
      </div>
    </header>
  );
}

export default Header;
