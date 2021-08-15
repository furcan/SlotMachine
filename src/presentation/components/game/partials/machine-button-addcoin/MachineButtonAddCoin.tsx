import { useDispatch, useSelector } from 'react-redux';
import { GiTwoCoins as IconCoin } from 'react-icons/gi';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotCoinsModalToggleAsync } from 'application/redux';

import 'presentation/components/game/partials/machine-button-addcoin/MachineButtonAddCoin.scss';


interface IMachineButtonAddCoin {
  classNamePrefix: string;
}

function MachineButtonAddCoin({ classNamePrefix }: IMachineButtonAddCoin): JSX.Element {
  const dispatch = useDispatch();
  const { stateSlotSpinningHasEnded } = useSelector(rdxSlotSelector);

  const addCoinButtonOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotCoinsModalToggleAsync(true));
  };

  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--addcoin`,
        `${!stateSlotSpinningHasEnded ? `${classNamePrefix}__button--loading` : ''}`,
      ].join(' ').trim()}
      onClick={stateSlotSpinningHasEnded ? addCoinButtonOnClickHandlerAsync : undefined}
      disabled={!stateSlotSpinningHasEnded}
    >
      <IconCoin className={`${classNamePrefix}__button__icon`} />
      <span className={`${classNamePrefix}__button__text`}>{constants.text.buttonAddCoin}</span>
    </button>
  );
}

export default MachineButtonAddCoin;
