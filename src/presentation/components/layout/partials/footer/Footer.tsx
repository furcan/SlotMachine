import { AiOutlineGithub as IconGitHub } from 'react-icons/ai';

import { constants } from 'application/constants';

import 'presentation/components/layout/partials/footer/Footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h1 className="footer__logo__title">{constants.app.name}</h1>
          <a
            className="footer__logo__link"
            target="_blank"
            rel="noreferrer"
            href={constants.text.gitHubUrl}
          >
            <IconGitHub />
            <span>{constants.text.gitHubName}</span>
          </a>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright__text">&copy; {new Date().getFullYear()} {constants.app.name}. {constants.text.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
