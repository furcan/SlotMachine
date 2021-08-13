import { useDispatch, useSelector } from 'react-redux';
import { VscDebugAlt as IconDebug } from 'react-icons/vsc';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotSwitchToDebugModeAsync } from 'application/redux';

import 'presentation/components/buttons/button-debug/ButtonDebug.scss';


interface IButtonDebug {
  classNamePrefix: string;
}

function ButtonDebug({ classNamePrefix }: IButtonDebug): JSX.Element {
  const dispatch = useDispatch();
  const { stateDebugMode, stateSlotCanBePlayed } = useSelector(rdxSlotSelector);

  const debugButtonOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotSwitchToDebugModeAsync(true));
  };

  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--debug`,
        `${!stateDebugMode.isActive ? `${classNamePrefix}__button--passive` : ''}`,
        `${!stateSlotCanBePlayed ? `${classNamePrefix}__button--disabled` : ''}`,
      ].join(' ').trim()}
      onClick={stateSlotCanBePlayed ? debugButtonOnClickHandlerAsync : undefined}
      disabled={!stateSlotCanBePlayed}
    >
      <IconDebug className={`${classNamePrefix}__button__icon`} />
      <span>{constants.text.buttonDebug}</span>
    </button>
  );

}

export default ButtonDebug;
