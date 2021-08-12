import { useDispatch } from 'react-redux';

import { rdxSlotStartAsync } from 'application/redux';

function Welcome(): JSX.Element { // TODO:
  const dispatch = useDispatch();

  const buttonStartHandler = (): void => {
    dispatch(rdxSlotStartAsync());
  };

  return (
    <div>
      <h1>Welcome... (TODO)</h1>
      <br />
      <br />
      <br />
      <button type="button" onClick={buttonStartHandler}>
        <span>{'START GAME (TODO)'}</span>
      </button>
    </div>
  );
}

export default Welcome;
