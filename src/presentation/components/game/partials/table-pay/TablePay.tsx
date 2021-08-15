import { useSelector } from 'react-redux';
import { GiTwoCoins as IconCoin } from 'react-icons/gi';

import { constants } from 'application/constants';
import {
  achievementsValuesAsArrayOfNumber,
  EAchievements,
  getAchievementPositionAsFC,
  getAchievementSymbolsImagesAsSrc,
} from 'application/enumerations/achievements';
import { rdxSlotSelector } from 'application/redux';


import 'presentation/components/game/partials/table-pay/TablePay.scss';


interface ITablePay {
  classNamePrefix: string;
}

function TablePay({ classNamePrefix }: ITablePay): JSX.Element {
  const { stateSlotAchievements, stateSlotSpinningHasEnded } = useSelector(rdxSlotSelector);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__head`}>
        <h2 className={`${classNamePrefix}__head__title`}>{constants.text.tablePay.title}</h2>
        <p className={`${classNamePrefix}__head__description`}>{constants.text.tablePay.description}</p>
      </div>

      <div className={`${classNamePrefix}__content`}>
        {!stateSlotSpinningHasEnded &&
          <div className={`${classNamePrefix}__content__loading`}>
            <span className={`${classNamePrefix}__content__loading__text`}>{constants.text.tablePay.loading}</span>
          </div>
        }
        {achievementsValuesAsArrayOfNumber
          .sort((a: EAchievements, b: EAchievements) => b - a)
          .map((achievement: EAchievements, index: number) => {
            const PositionIconAsComponent = getAchievementPositionAsFC(achievement);
            const symbolsImagesAsSrc = getAchievementSymbolsImagesAsSrc(achievement);
            const isAchievementGameOver = achievement === EAchievements.GAME_OVER;
            const isSymbolsCanBeShuffled = (achievement === EAchievements.COMBINATION_ALLBARS_ONANY) || (achievement === EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);

            const isGameOver = stateSlotAchievements.isGameOver;
            const isAchieved = ((achievement === stateSlotAchievements.achievementTop) || (achievement === stateSlotAchievements.achievementCenter) || (achievement === stateSlotAchievements.achievementBottom)) && !isAchievementGameOver;
            const isStateActive = (isAchieved || (isGameOver && isAchievementGameOver)) && stateSlotSpinningHasEnded;
            const isShowGameOver = isAchievementGameOver && isGameOver && stateSlotSpinningHasEnded;

            return (
              <div key={index} className={[
                `${classNamePrefix}__content__achievement`,
                (isStateActive ? `${classNamePrefix}__content__achievement--active` : ''),
                (isAchievementGameOver ? `${classNamePrefix}__content__achievement--gameover` : ''),
                (isSymbolsCanBeShuffled ? `${classNamePrefix}__content__achievement--shuffle` : ''),
              ].join(' ').trim()}>
                <div className={`${classNamePrefix}__content__achievement__position`}>
                  {isShowGameOver && <PositionIconAsComponent />}
                  {!isAchievementGameOver && <PositionIconAsComponent />}
                </div>
                <div className={`${classNamePrefix}__content__achievement__symbols`}>
                  {isShowGameOver &&
                    <span className={`${classNamePrefix}__content__achievement__symbols__gameover`}>{constants.text.tablePay.gameOver}</span>}
                  {!isAchievementGameOver &&
                    symbolsImagesAsSrc.map((symbolSrc: string, index: number) => {
                      return (
                        <img
                          key={index}
                          width="20"
                          height="18"
                          alt={constants.app.name}
                          src={symbolSrc}
                          data-index={index}
                          className={`${classNamePrefix}__content__achievement__symbols__image`}
                        />
                      );
                    })
                  }
                </div>
                <div className={`${classNamePrefix}__content__achievement__value`}>
                  {!isAchievementGameOver &&
                    <>
                      <IconCoin className={`${classNamePrefix}__content__achievement__value__icon`} />
                      <span className={`${classNamePrefix}__content__achievement__value__text`}>{`x${achievement}`}</span>
                    </>
                  }
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TablePay;
