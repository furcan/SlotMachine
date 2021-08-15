import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSave as IconSave } from 'react-icons/fi';
import { GiTwoCoins as IconCoin } from 'react-icons/gi';
import { Notify } from 'notiflix';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotCoinsBalanceIncreaseAsync } from 'application/redux';

import 'presentation/components/game/partials/machine-coins-modal/MachineCoinsModal.scss';


interface IMachineCoinsModal {
  classNamePrefix: string;
}

function MachineCoinsModal({ classNamePrefix }: IMachineCoinsModal): JSX.Element {
  const dispatch = useDispatch();
  const { stateSlotSpinningHasEnded, stateSlotCoinsBalance } = useSelector(rdxSlotSelector);

  const [coinsCount, setCoinsCount] = useState<number>(1);

  const saveAndCloseCoinsModalOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotCoinsBalanceIncreaseAsync(coinsCount));
    Notify.success(constants.text.coins.modalSavedAndClosed, constants.settings.notifyOptions);
  };

  const saveButtonDisabledOnClickHandler = (): void => {
    Notify.info(constants.text.coins.coinsRequired, constants.settings.notifyOptions);
  };

  const coinInputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const clientValue = +(event.target.value.replace(/[^0-9]]/gm, '0')) || 0;
    const allowedValue = constants.settings.maxCoinsCount - stateSlotCoinsBalance;
    setCoinsCount((clientValue > allowedValue ? allowedValue : clientValue));
  };

  return (
    <div className={[`${classNamePrefix}__content`, `${!stateSlotSpinningHasEnded ? `${classNamePrefix}__content--disabled` : ''}`].join(' ').trim()}>
      <div className={`${classNamePrefix}__head`}>
        <h2 className={`${classNamePrefix}__head__title`}>{constants.text.coins.modalTitle}</h2>
        <p className={`${classNamePrefix}__head__description`}>
          <span>{constants.text.coins.modalDescription}</span>
          <span className={`${classNamePrefix}__head__description__bold`}>{stateSlotCoinsBalance}</span>
        </p>
        <button
          type="button"
          className={[
            `${classNamePrefix}__head__save`,
            (!coinsCount ? `${classNamePrefix}__head__save--passive` : ''),
          ].join(' ').trim()}
          onClick={coinsCount ? saveAndCloseCoinsModalOnClickHandlerAsync : saveButtonDisabledOnClickHandler}
        >
          <IconSave />
        </button>
      </div>

      <div className={`${classNamePrefix}__form`}>
        <div className={`${classNamePrefix}__form__group`}>
          <IconCoin className={`${classNamePrefix}__form__group__icon`} />
          <input
            type="tel"
            className={`${classNamePrefix}__form__group__input`}
            autoCapitalize="off" autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            maxLength={5}
            value={coinsCount}
            onChange={(event) => coinInputOnChangeHandler(event)}
          />
        </div>
      </div>

    </div>
  );
}

export default MachineCoinsModal;
