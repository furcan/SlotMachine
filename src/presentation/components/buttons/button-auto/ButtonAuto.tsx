import { useDispatch, useSelector } from 'react-redux';
import { VscSync as IconAuto } from 'react-icons/vsc';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotSwitchToDebugModeAsync } from 'application/redux';

import 'presentation/components/buttons/button-auto/ButtonAuto.scss';


interface IButtonAuto {
  classNamePrefix: string;
}

function ButtonAuto({ classNamePrefix }: IButtonAuto): JSX.Element {
  const dispatch = useDispatch();
  const { stateDebugMode, stateSlotCanBePlayed } = useSelector(rdxSlotSelector);

  const autoButtonOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotSwitchToDebugModeAsync(false));
  };

  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--auto`,
        `${stateDebugMode.isActive ? `${classNamePrefix}__button--passive` : ''}`,
        `${!stateSlotCanBePlayed ? `${classNamePrefix}__button--disabled` : ''}`,
      ].join(' ').trim()}
      onClick={stateSlotCanBePlayed ? autoButtonOnClickHandlerAsync : undefined}
      disabled={!stateSlotCanBePlayed}
    >
      <IconAuto className={`${classNamePrefix}__button__icon`} />
      <span>{constants.text.buttonAuto}</span>
    </button>
  );

}

export default ButtonAuto;
