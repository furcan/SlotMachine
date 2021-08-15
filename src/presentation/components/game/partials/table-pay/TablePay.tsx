import { useSelector } from 'react-redux';
import { GiTwoCoins as IconCoin } from 'react-icons/gi';
import { HiOutlineEmojiSad as IconGameOver } from 'react-icons/hi';
import { GrMenu as IconAny } from 'react-icons/gr';
import {
  AiOutlineVerticalAlignTop as IconTop,
  AiOutlineVerticalAlignMiddle as IconCenter,
  AiOutlineVerticalAlignBottom as IconBottom,
} from 'react-icons/ai';

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
          </div>}

        {achievementsValuesAsArrayOfNumber
          .filter(x => x !== EAchievements.GAME_OVER)
          ?.sort((a: EAchievements, b: EAchievements) => b - a)
          ?.map((achievement: EAchievements, index: number) => {
            const PositionIconAsComponent = getAchievementPositionAsFC(achievement);
            const symbolsImagesAsSrc = getAchievementSymbolsImagesAsSrc(achievement);
            const isSymbolsCanBeShuffled = (achievement === EAchievements.COMBINATION_ALLBARS_ONANY) || (achievement === EAchievements.COMBINATION_CHERRYANDSEVEN_ONANY);
            const isAchieved = ((achievement === stateSlotAchievements.achievementTop) || (achievement === stateSlotAchievements.achievementCenter) || (achievement === stateSlotAchievements.achievementBottom)) && stateSlotSpinningHasEnded;

            return (
              <div key={index} className={[
                `${classNamePrefix}__content__achievement`,
                (isAchieved ? `${classNamePrefix}__content__achievement--active` : ''),
                (isSymbolsCanBeShuffled ? `${classNamePrefix}__content__achievement--shuffle` : ''),
              ].join(' ').trim()}>
                <div className={`${classNamePrefix}__content__achievement__position`}>
                  <PositionIconAsComponent />
                </div>
                <div className={`${classNamePrefix}__content__achievement__symbols`}>
                  {symbolsImagesAsSrc.map((symbolSrc: string, index: number) => {
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
                  })}
                </div>
                <div className={`${classNamePrefix}__content__achievement__value`}>
                  <IconCoin className={`${classNamePrefix}__content__achievement__value__icon`} />
                  <span className={`${classNamePrefix}__content__achievement__value__text`}>{`x${achievement}`}</span>
                </div>
              </div>
            );
          })}

        {!stateSlotAchievements.isGameOver &&
          <div className={[
            `${classNamePrefix}__content__achievement`,
            `${classNamePrefix}__content__achievement--infobar`,
          ].join(' ').trim()}>
            <div className={`${classNamePrefix}__content__achievement__info`}>
              <IconTop className={`${classNamePrefix}__content__achievement__info__icon`} />
              <span className={`${classNamePrefix}__content__achievement__info__text`}>{constants.text.tablePay.lineTop}</span>
            </div>
            <div className={`${classNamePrefix}__content__achievement__info`}>
              <IconCenter className={`${classNamePrefix}__content__achievement__info__icon`} />
              <span className={`${classNamePrefix}__content__achievement__info__text`}>{constants.text.tablePay.lineCenter}</span>
            </div>
            <div className={`${classNamePrefix}__content__achievement__info`}>
              <IconBottom className={`${classNamePrefix}__content__achievement__info__icon`} />
              <span className={`${classNamePrefix}__content__achievement__info__text`}>{constants.text.tablePay.lineBottom}</span>
            </div>
            <div className={`${classNamePrefix}__content__achievement__info`}>
              <IconAny className={`${classNamePrefix}__content__achievement__info__icon`} />
              <span className={`${classNamePrefix}__content__achievement__info__text`}>{constants.text.tablePay.lineAny}</span>
            </div>
          </div>}

        {(stateSlotAchievements.isGameOver &&
          stateSlotSpinningHasEnded &&
          achievementsValuesAsArrayOfNumber.filter(x => x === EAchievements.GAME_OVER)) &&
          <div className={[
            `${classNamePrefix}__content__achievement`,
            `${classNamePrefix}__content__achievement--active`,
            `${classNamePrefix}__content__achievement--gameover`,
          ].join(' ').trim()}>
            <div className={`${classNamePrefix}__content__achievement__position`}>
              <IconGameOver />
            </div>
            <div className={`${classNamePrefix}__content__achievement__symbols`}>
              <span className={`${classNamePrefix}__content__achievement__symbols__gameover`}>{constants.text.tablePay.gameOver}</span>
            </div>
          </div>}
      </div>
    </div>
  );
}

export default TablePay;
