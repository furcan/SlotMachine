import { useDispatch, useSelector } from 'react-redux';
import { VscSync as IconAuto } from 'react-icons/vsc';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotDebugModeSwitchAsync } from 'application/redux';

import 'presentation/components/game/partials/machine-button-auto/MachineButtonAuto.scss';


interface IMachineButtonAuto {
  classNamePrefix: string;
}

function MachineButtonAuto({ classNamePrefix }: IMachineButtonAuto): JSX.Element {
  const dispatch = useDispatch();
  const { stateDebugMode, stateSlotSpinningHasEnded } = useSelector(rdxSlotSelector);

  const autoButtonOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotDebugModeSwitchAsync(false));
  };

  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--auto`,
        `${stateDebugMode.isActive ? `${classNamePrefix}__button--passive` : ''}`,
        `${!stateSlotSpinningHasEnded ? `${classNamePrefix}__button--loading` : ''}`,
      ].join(' ').trim()}
      onClick={stateSlotSpinningHasEnded ? autoButtonOnClickHandlerAsync : undefined}
    >
      <IconAuto className={`${classNamePrefix}__button__icon`} />
      <span className={`${classNamePrefix}__button__text`}>{constants.text.button.auto}</span>
    </button>
  );

}

export default MachineButtonAuto;
