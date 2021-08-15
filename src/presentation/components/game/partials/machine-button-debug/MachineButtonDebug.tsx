import { useDispatch, useSelector } from 'react-redux';
import { VscDebugAlt as IconDebug } from 'react-icons/vsc';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotDebugModeSwitchAsync } from 'application/redux';

import 'presentation/components/game/partials/machine-button-debug/MachineButtonDebug.scss';


interface IMachineButtonDebug {
  classNamePrefix: string;
}

function MachineButtonDebug({ classNamePrefix }: IMachineButtonDebug): JSX.Element {
  const dispatch = useDispatch();
  const { stateDebugMode, stateSlotSpinningHasEnded } = useSelector(rdxSlotSelector);

  const debugButtonOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotDebugModeSwitchAsync(true));
  };

  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--debug`,
        `${!stateDebugMode.isActive ? `${classNamePrefix}__button--passive` : ''}`,
        `${!stateSlotSpinningHasEnded ? `${classNamePrefix}__button--loading` : ''}`,
      ].join(' ').trim()}
      onClick={stateSlotSpinningHasEnded ? debugButtonOnClickHandlerAsync : undefined}
    >
      <IconDebug className={`${classNamePrefix}__button__icon`} />
      <span className={`${classNamePrefix}__button__text`}>{constants.text.buttonDebug}</span>
    </button>
  );

}

export default MachineButtonDebug;
