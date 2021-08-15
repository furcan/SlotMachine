import { useDispatch, useSelector } from 'react-redux';
import { GiTwoCoins as IconCoin } from 'react-icons/gi';
import { FiDollarSign as IconWithdraw } from 'react-icons/fi';
import { Notify } from 'notiflix';

import { constants } from 'application/constants';
import { rdxSlotSelector, rdxSlotCoinsWithdrawAsync } from 'application/redux';

import 'presentation/components/game/partials/table-balance/TableBalance.scss';


interface ITableBalance {
  classNamePrefix: string;
}

function TableBalance({ classNamePrefix }: ITableBalance): JSX.Element {
  const dispatch = useDispatch();
  const { stateSlotSpinningHasEnded, stateSlotCoinsBalance } = useSelector(rdxSlotSelector);

  const withdrawOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotCoinsWithdrawAsync());
    Notify.success(constants.text.tableBalance.withdrawSuccess, constants.settings.notifyOptions);
  };

  const withdrawButtonDisabledOnClickHandler = (): void => {
    Notify.info(constants.text.tableBalance.noBalance, constants.settings.notifyOptions);
  };

  return (
    <div className={classNamePrefix}>
      {!stateSlotSpinningHasEnded &&
        <div className={`${classNamePrefix}__loading`}>
          <span className={`${classNamePrefix}__loading__text`}>{constants.text.tableBalance.loading}</span>
        </div>}

      <div className={`${classNamePrefix}__head`}>
        <h2 className={`${classNamePrefix}__head__title`}>{constants.text.tableBalance.title}</h2>
        <p className={`${classNamePrefix}__head__description`}>
          <span>{constants.text.tableBalance.description}</span>
          <IconCoin className={`${classNamePrefix}__head__description__icon`} />
          <span className={`${classNamePrefix}__head__description__bold`}>{`x${stateSlotCoinsBalance}`}</span>
        </p>
        <button
          type="button"
          className={[
            `${classNamePrefix}__head__withdraw`,
            (!stateSlotCoinsBalance ? `${classNamePrefix}__head__withdraw--passive` : ''),
          ].join(' ').trim()}
          onClick={stateSlotCoinsBalance ? withdrawOnClickHandlerAsync : withdrawButtonDisabledOnClickHandler}
        >
          <IconWithdraw className={`${classNamePrefix}__head__withdraw__icon`} />
          <span className={`${classNamePrefix}__head__withdraw__text`}>{constants.text.buttonWithdraw}</span>
        </button>
      </div>
    </div>
  );
}

export default TableBalance;
