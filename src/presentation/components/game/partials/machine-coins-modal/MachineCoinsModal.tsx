import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSave as IconSave, FiX as IconClose } from 'react-icons/fi';
import { GiTwoCoins as IconCoin } from 'react-icons/gi';
import { Notify } from 'notiflix';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotCoinsBalanceIncreaseByAmountAsync, rdxSlotCoinsModalToggleAsync } from 'application/redux';

import 'presentation/components/game/partials/machine-coins-modal/MachineCoinsModal.scss';


interface IMachineCoinsModal {
  classNamePrefix: string;
}

function MachineCoinsModal({ classNamePrefix }: IMachineCoinsModal): JSX.Element {
  const dispatch = useDispatch();
  const { stateSlotSpinningHasEnded, stateSlotCoinsBalance } = useSelector(rdxSlotSelector);

  const [coinsCount, setCoinsCount] = useState<number>(1);

  const saveAndCloseCoinsModalOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotCoinsBalanceIncreaseByAmountAsync(coinsCount));
    Notify.success(constants.text.coins.modalSavedAndClosed, constants.settings.notifyOptions);
  };

  const closeCoinsModalOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotCoinsModalToggleAsync(false));
  };

  const saveButtonDisabledOnClickHandler = (): void => {
    Notify.info(constants.text.coins.coinsRequired, constants.settings.notifyOptions);
  };

  const coinInputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const clientValue = +(event.target.value.replace(/[^0-9]]/gm, '0')) || 0;
    const allowedValue = constants.settings.maxCoinsCount - stateSlotCoinsBalance;
    setCoinsCount((clientValue > allowedValue ? allowedValue : clientValue));
  };

  const isCoinsCanBeAdded = stateSlotCoinsBalance < constants.settings.maxCoinsCount;
  return (
    <div className={[`${classNamePrefix}__content`, `${!stateSlotSpinningHasEnded ? `${classNamePrefix}__content--disabled` : ''}`].join(' ').trim()}>
      <div className={`${classNamePrefix}__head`}>
        <h2 className={`${classNamePrefix}__head__title`}>{constants.text.coins.modalTitle}</h2>
        <p className={`${classNamePrefix}__head__description`}>
          <span>{constants.text.coins.modalDescription}</span>
          <span className={`${classNamePrefix}__head__description__bold`}>{stateSlotCoinsBalance}</span>
        </p>
        {isCoinsCanBeAdded &&
          <button
            type="button"
            className={[
              `${classNamePrefix}__head__close`,
              (!coinsCount ? `${classNamePrefix}__head__save--passive` : ''),
            ].join(' ').trim()}
            onClick={coinsCount ? saveAndCloseCoinsModalOnClickHandlerAsync : saveButtonDisabledOnClickHandler}
          >
            <IconSave />
          </button>}

        {!isCoinsCanBeAdded &&
          <button
            type="button"
            className={[
              `${classNamePrefix}__head__save`,
            ].join(' ').trim()}
            onClick={closeCoinsModalOnClickHandlerAsync}
          >
            <IconClose />
          </button>}
      </div>

      <div className={`${classNamePrefix}__form`}>
        {isCoinsCanBeAdded &&
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
          </div>}
        {!isCoinsCanBeAdded &&
          <p className={`${classNamePrefix}__form__group__message`}>{constants.text.coins.modalCoinsCanNotBeAdded}</p>}
      </div>

    </div>
  );
}

export default MachineCoinsModal;
