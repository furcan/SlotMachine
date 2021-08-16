import { useDispatch } from 'react-redux';
import { AiOutlineGithub as IconGitHub } from 'react-icons/ai';

import { constants } from 'application/constants';
import { rdxSlotWelcomeAsync } from 'application/redux';

import 'presentation/components/layout/partials/footer/Footer.scss';


function Footer(): JSX.Element {
  const dispatch = useDispatch();

  const goToWelcomeButtonOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotWelcomeAsync());
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <button
            type="button"
            className="footer__logo__button"
            onClick={goToWelcomeButtonOnClickHandlerAsync}
          >
            <span className="footer__logo__button__text">{constants.app.name}</span>
          </button>
          <a
            className="footer__logo__link"
            target="_blank"
            rel="noreferrer"
            href={constants.text.footer.gitHubUrl}
          >
            <IconGitHub />
            <span>{constants.text.footer.gitHubName}</span>
          </a>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright__text">&copy; {new Date().getFullYear()} {constants.app.name}. {constants.text.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
