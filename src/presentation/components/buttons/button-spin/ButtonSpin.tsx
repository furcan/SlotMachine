import { useDispatch, useSelector } from 'react-redux';
import { VscSettings as IconSpin } from 'react-icons/vsc';

import { constants } from 'application/constants';
import { elementScrollToWithDurationAsync, generateRandomNumberBetween } from 'application/helpers';
import {
  rdxSlotSelector,
  rdxSlotRestartAsync,
  rdxSlotIsSpinningAsync,
  rdxSlotHasEndedAsync,
  rdxSlotLuckyLinesAsync,
  rdxSlotLuckyNumbersAsync,
  rdxSlotAchievementsAsync,
} from 'application/redux';

import 'presentation/components/buttons/button-spin/ButtonSpin.scss';


interface IButtonSpin {
  classNamePrefix: string;
  refReelLeft: React.RefObject<HTMLDivElement>;
  refReelCenter: React.RefObject<HTMLDivElement>;
  refReelRight: React.RefObject<HTMLDivElement>;
  refsSymbolsLeft: React.MutableRefObject<(HTMLDivElement | null)[]>;
  refsSymbolsCenter: React.MutableRefObject<(HTMLDivElement | null)[]>;
  refsSymbolsRight: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function ButtonSpin({
  classNamePrefix,
  refReelLeft,
  refReelCenter,
  refReelRight,
  refsSymbolsLeft,
  refsSymbolsCenter,
  refsSymbolsRight,
}: IButtonSpin): JSX.Element {
  const dispatch = useDispatch();
  const {
    stateSlotCanBePlayed,
    stateSlotLuckyLines,
    stateSlotLuckyNumbers,
  } = useSelector(rdxSlotSelector);

  const spinOnClickHandlerAsync = async (): Promise<void> => {
    // Reset the Reels: begin
    dispatch(rdxSlotRestartAsync());
    refReelLeft.current?.scrollTo({ top: 0 });
    refReelCenter.current?.scrollTo({ top: 0 });
    refReelRight.current?.scrollTo({ top: 0 });
    // Reset the Reels: end


    // TODO:
    const luckyNumLeft = stateSlotLuckyNumbers.left;
    const luckyNumCenter = stateSlotLuckyNumbers.center;
    const luckyNumRight = stateSlotLuckyNumbers.right;
    // TODO:


    // Reels and Symbols: begin
    const symbolLeft = refsSymbolsLeft.current[luckyNumLeft - 1];
    const symbolCenter = refsSymbolsCenter.current[luckyNumCenter - 1];
    const symbolRight = refsSymbolsRight.current[luckyNumRight - 1];
    const reelLeft = refReelLeft.current;
    const reelCenter = refReelCenter.current;
    const reelRight = refReelRight.current;
    // Reels and Symbols: end

    // Reels and Symbols are existed
    if (symbolLeft && symbolCenter && symbolRight && reelLeft && reelCenter && reelRight) {
      // Spining effect
      dispatch(rdxSlotIsSpinningAsync());


      // TODO: debug mode or random mode
      // TODO: random will be enum => 0 => top || random
      // TODO: random will be enum => 1 => center || random
      // TODO: random will be enum => 2 => bottom || random
      const lines = {
        // left: generateRandomNumberBetween(0, 2),
        // center: generateRandomNumberBetween(0, 2),
        // right: generateRandomNumberBetween(0, 2),
        left: 1,
        center: 1,
        right: 1,
      };
      dispatch(rdxSlotLuckyLinesAsync(lines));


      // TODO: debug mode or random mode
      const numbers = {
        left: generateRandomNumberBetween(6, 94),
        center: generateRandomNumberBetween(6, 94),
        right: generateRandomNumberBetween(6, 94),
      };
      dispatch(rdxSlotLuckyNumbersAsync(numbers));


      // Spin the Reels: begin
      const positionLeft = (symbolLeft.offsetTop - reelLeft.offsetTop) - (stateSlotLuckyLines.left * symbolLeft.offsetHeight);
      const positionCenter = (symbolCenter.offsetTop - reelCenter.offsetTop) - (stateSlotLuckyLines.center * symbolCenter.offsetHeight);
      const positionRight = (symbolRight.offsetTop - reelRight.offsetTop) - (stateSlotLuckyLines.right * symbolRight.offsetHeight);
      await Promise.all([
        elementScrollToWithDurationAsync(reelLeft, positionLeft, 1000), // TODO: duration num will be const
        elementScrollToWithDurationAsync(reelCenter, positionCenter, 1500), // TODO: duration num will be const
        elementScrollToWithDurationAsync(reelRight, positionRight, 2000), // TODO: duration num will be const
      ]);
      // Spin the Reels: end

      // Achievements: begin
      const topLineSymbol1 = refsSymbolsLeft.current[luckyNumLeft - stateSlotLuckyLines.left - 1];
      const topLineSymbol2 = refsSymbolsCenter.current[luckyNumCenter - stateSlotLuckyLines.center - 1];
      const topLineSymbol3 = refsSymbolsRight.current[luckyNumRight - stateSlotLuckyLines.right - 1];
      const centerLineSymbol1 = refsSymbolsLeft.current[luckyNumLeft - stateSlotLuckyLines.left];
      const centerLineSymbol2 = refsSymbolsCenter.current[luckyNumCenter - stateSlotLuckyLines.center];
      const centerLineSymbol3 = refsSymbolsRight.current[luckyNumRight - stateSlotLuckyLines.right];
      const bottomLineSymbol1 = refsSymbolsLeft.current[luckyNumLeft - stateSlotLuckyLines.left + 1];
      const bottomLineSymbol2 = refsSymbolsCenter.current[luckyNumCenter - stateSlotLuckyLines.center + 1];
      const bottomLineSymbol3 = refsSymbolsRight.current[luckyNumLeft - stateSlotLuckyLines.right + 1];
      const achievements = {
        lineTopAchievements: topLineSymbol1?.dataset.achievement + ' * ' + topLineSymbol2?.dataset.achievement + ' * ' + topLineSymbol3?.dataset.achievement,
        lineCenterAchievements: centerLineSymbol1?.dataset.achievement + ' * ' + centerLineSymbol2?.dataset.achievement + ' * ' + centerLineSymbol3?.dataset.achievement,
        lineBottomAchievements: bottomLineSymbol1?.dataset.achievement + ' * ' + bottomLineSymbol2?.dataset.achievement + ' * ' + bottomLineSymbol3?.dataset.achievement,
        reelLeftVisibleIndexes: {
          top: (luckyNumLeft - stateSlotLuckyLines.left - 1),
          center: (luckyNumLeft - stateSlotLuckyLines.left),
          bottom: (luckyNumLeft - stateSlotLuckyLines.left + 1),
        },
        reelCenterVisibleIndexes: {
          top: (luckyNumCenter - stateSlotLuckyLines.center - 1),
          center: (luckyNumCenter - stateSlotLuckyLines.center),
          bottom: (luckyNumCenter - stateSlotLuckyLines.center + 1),
        },
        reelRightVisibleIndexes: {
          top: (luckyNumRight - stateSlotLuckyLines.right - 1),
          center: (luckyNumRight - stateSlotLuckyLines.right),
          bottom: (luckyNumRight - stateSlotLuckyLines.right + 1),
        },
      };
      dispatch(rdxSlotAchievementsAsync(achievements));
      // Achievements: end

      // Spin has ended
      dispatch(rdxSlotHasEndedAsync(true));
    }
  };

  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--spin`,
        `${!stateSlotCanBePlayed ? `${classNamePrefix}__button--disabled` : ''}`,
      ].join(' ').trim()}
      onClick={stateSlotCanBePlayed ? spinOnClickHandlerAsync : undefined}
    >
      <IconSpin className={`${classNamePrefix}__button__icon`} />
      <span>{constants.text.buttonSpin} - ({`${stateSlotLuckyNumbers.left}, ${stateSlotLuckyNumbers.center}, ${stateSlotLuckyNumbers.right}`})</span>
    </button>
  );

}

export default ButtonSpin;
