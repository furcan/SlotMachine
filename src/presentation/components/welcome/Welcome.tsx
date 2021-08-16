import { useDispatch } from 'react-redux';
import { FcStart as IconStart } from 'react-icons/fc';

import { constants } from 'application/constants';
import { rdxSlotStartGameAsync } from 'application/redux';

import 'presentation/components/welcome/Welcome.scss';


function Welcome(): JSX.Element {
  const dispatch = useDispatch();

  const startGameButtonOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotStartGameAsync());
  };

  return (
    <div className="welcome">
      <div className="welcome__banner">
        <img
          width="1920"
          height="783"
          className="welcome__banner__image"
          alt={constants.app.name}
          src={`${process.env.PUBLIC_URL}/content/media/banners/slot-machine-banner-welcome.png`}
        />
      </div>
      <button
        type="button"
        className="welcome__button"
        onClick={startGameButtonOnClickHandlerAsync}
      >
        <IconStart className="welcome__button__icon" />
        <span className="welcome__button__text">{constants.text.button.start}</span>
      </button>
    </div>
  );
}

export default Welcome;
