import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { elementScrollToWithDurationAsync, generateRandomNumberBetween } from 'application/helpers';
import { EReelsPositions } from 'application/enumerations/reels';
import {
  rdxSlotSelector,
  rdxSlotRestartAsync,
  rdxSlotIsSpinningAsync,
  rdxSlotHasEndedAsync,
  rdxSlotLuckyLinesAsync,
  rdxSlotLuckyNumbersAsync,
  rdxSlotAchievementsAsync,
} from 'application/redux';

import Reel from 'presentation/components/game/partials/reel/Reel';

import 'presentation/components/game/partials/machine/Machine.scss';

function Machine(): JSX.Element { // TODO:
  const dispatch = useDispatch();

  const {
    stateSlotIsSpinning,
    stateSlotSpinningHasEnded,
    stateSlotData,
    stateSlotLuckyLines,
    stateSlotLuckyNumbers,
    stateSlotAchievements,
  } = useSelector(rdxSlotSelector);

  const refReelLeft = useRef<HTMLDivElement>(null);
  const refReelCenter = useRef<HTMLDivElement>(null);
  const refReelRight = useRef<HTMLDivElement>(null);
  const refsSymbolsLeft = useRef<(HTMLDivElement | null)[]>([]);
  const refsSymbolsCenter = useRef<(HTMLDivElement | null)[]>([]);
  const refsSymbolsRight = useRef<(HTMLDivElement | null)[]>([]);


  const spinHandlerAsync = async (luckyNum1: number, luckyNum2: number, luckyNum3: number): Promise<void> => {
    dispatch(rdxSlotRestartAsync());
    refReelLeft.current?.scrollTo({ top: 0 });
    refReelCenter.current?.scrollTo({ top: 0 });
    refReelRight.current?.scrollTo({ top: 0 });

    const symbolLeft = refsSymbolsLeft.current[luckyNum1 - 1];
    const symbolCenter = refsSymbolsCenter.current[luckyNum2 - 1];
    const symbolRight = refsSymbolsRight.current[luckyNum3 - 1];
    const reelLeft = refReelLeft.current;
    const reelCenter = refReelCenter.current;
    const reelRight = refReelRight.current;

    if (symbolLeft && symbolCenter && symbolRight && reelLeft && reelCenter && reelRight) {
      dispatch(rdxSlotIsSpinningAsync());

      const lines = {
        // left: generateRandomNumberBetween(0, 2),
        // center: generateRandomNumberBetween(0, 2),
        // right: generateRandomNumberBetween(0, 2),
        left: 1,
        center: 1,
        right: 1,
      };
      dispatch(rdxSlotLuckyLinesAsync(lines));


      const numbers = {
        left: generateRandomNumberBetween(6, 94),
        center: generateRandomNumberBetween(6, 94),
        right: generateRandomNumberBetween(6, 94),
      };
      dispatch(rdxSlotLuckyNumbersAsync(numbers));


      const positionLeft = (symbolLeft.offsetTop - reelLeft.offsetTop) - (stateSlotLuckyLines.left * symbolLeft.offsetHeight);
      const positionCenter = (symbolCenter.offsetTop - reelCenter.offsetTop) - (stateSlotLuckyLines.center * symbolCenter.offsetHeight);
      const positionRight = (symbolRight.offsetTop - reelRight.offsetTop) - (stateSlotLuckyLines.right * symbolRight.offsetHeight);
      await Promise.all([
        elementScrollToWithDurationAsync(reelLeft, positionLeft, 1000), // TODO: duration num will be const
        elementScrollToWithDurationAsync(reelCenter, positionCenter, 1500), // TODO: duration num will be const
        elementScrollToWithDurationAsync(reelRight, positionRight, 2000), // TODO: duration num will be const
      ]);

      const topLineSymbol1 = refsSymbolsLeft.current[luckyNum1 - stateSlotLuckyLines.left - 1];
      const topLineSymbol2 = refsSymbolsCenter.current[luckyNum2 - stateSlotLuckyLines.center - 1];
      const topLineSymbol3 = refsSymbolsRight.current[luckyNum3 - stateSlotLuckyLines.right - 1];
      const centerLineSymbol1 = refsSymbolsLeft.current[luckyNum1 - stateSlotLuckyLines.left];
      const centerLineSymbol2 = refsSymbolsCenter.current[luckyNum2 - stateSlotLuckyLines.center];
      const centerLineSymbol3 = refsSymbolsRight.current[luckyNum3 - stateSlotLuckyLines.right];
      const bottomLineSymbol1 = refsSymbolsLeft.current[luckyNum1 - stateSlotLuckyLines.left + 1];
      const bottomLineSymbol2 = refsSymbolsCenter.current[luckyNum2 - stateSlotLuckyLines.center + 1];
      const bottomLineSymbol3 = refsSymbolsRight.current[luckyNum3 - stateSlotLuckyLines.right + 1];
      const achievements = {
        lineTopAchievements: topLineSymbol1?.dataset.achievement + ' * ' + topLineSymbol2?.dataset.achievement + ' * ' + topLineSymbol3?.dataset.achievement,
        lineCenterAchievements: centerLineSymbol1?.dataset.achievement + ' * ' + centerLineSymbol2?.dataset.achievement + ' * ' + centerLineSymbol3?.dataset.achievement,
        lineBottomAchievements: bottomLineSymbol1?.dataset.achievement + ' * ' + bottomLineSymbol2?.dataset.achievement + ' * ' + bottomLineSymbol3?.dataset.achievement,
        reelLeftVisibleIndexes: {
          top: (luckyNum1 - stateSlotLuckyLines.left - 1),
          center: (luckyNum1 - stateSlotLuckyLines.left),
          bottom: (luckyNum1 - stateSlotLuckyLines.left + 1),
        },
        reelCenterVisibleIndexes: {
          top: (luckyNum2 - stateSlotLuckyLines.center - 1),
          center: (luckyNum2 - stateSlotLuckyLines.center),
          bottom: (luckyNum2 - stateSlotLuckyLines.center + 1),
        },
        reelRightVisibleIndexes: {
          top: (luckyNum3 - stateSlotLuckyLines.right - 1),
          center: (luckyNum3 - stateSlotLuckyLines.right),
          bottom: (luckyNum3 - stateSlotLuckyLines.right + 1),
        },
      };
      dispatch(rdxSlotAchievementsAsync(achievements));

      dispatch(rdxSlotHasEndedAsync(true));
    }
  };


  return (
    <>
      <button type="button" className="app__button" onClick={() => spinHandlerAsync(stateSlotLuckyNumbers.left, stateSlotLuckyNumbers.center, stateSlotLuckyNumbers.right)}>
        <span>TEST BUTTON ({`${stateSlotLuckyNumbers.left}, ${stateSlotLuckyNumbers.center}, ${stateSlotLuckyNumbers.right}`})</span>
      </button>

      <br />
      <br />

      <div className={`machine ${stateSlotIsSpinning ? 'machine--spinning' : ''}`}>
        <Reel
          classNamePrefix={'machine'}
          slotData={stateSlotData}
          refReel={refReelLeft}
          refsSymbol={refsSymbolsLeft}
          achievedIndexes={stateSlotAchievements.reelLeftVisibleIndexes}
          position={EReelsPositions.LEFT}
          hasEnded={stateSlotSpinningHasEnded}
        />
        <Reel
          classNamePrefix={'machine'}
          slotData={stateSlotData}
          refReel={refReelCenter}
          refsSymbol={refsSymbolsCenter}
          achievedIndexes={stateSlotAchievements.reelCenterVisibleIndexes}
          position={EReelsPositions.CENTER}
          hasEnded={stateSlotSpinningHasEnded}
        />
        <Reel
          classNamePrefix={'machine'}
          slotData={stateSlotData}
          refReel={refReelRight}
          refsSymbol={refsSymbolsRight}
          achievedIndexes={stateSlotAchievements.reelRightVisibleIndexes}
          position={EReelsPositions.RIGHT}
          hasEnded={stateSlotSpinningHasEnded}
        />
      </div>
    </>
  );
}

export default Machine;
