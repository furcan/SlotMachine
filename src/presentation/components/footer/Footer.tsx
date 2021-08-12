import { constants } from 'application/constants';

import 'presentation/components/footer/Footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <p className="footer__copyright__text">copyright text - {constants.app.name}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
