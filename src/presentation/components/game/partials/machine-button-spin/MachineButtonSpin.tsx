import { useDispatch, useSelector } from 'react-redux';
import { VscSettings as IconSpin } from 'react-icons/vsc';

import { constants } from 'application/constants';
import { ESymbols, symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { elementScrollToWithDurationAsync, generateRandomNumberBetween } from 'application/helpers';
import { rdxSlotSelector, rdxSlotSpinningAnimationAsync, rdxSlotSpinningHasEndedAsync, rdxSlotAchievementsAsync } from 'application/redux';

import 'presentation/components/game/partials/machine-button-spin/MachineButtonSpin.scss';


interface IMachineButtonSpin {
  classNamePrefix: string;
  refReelLeft: React.RefObject<HTMLDivElement>;
  refReelCenter: React.RefObject<HTMLDivElement>;
  refReelRight: React.RefObject<HTMLDivElement>;
  refsSymbolsLeft: React.MutableRefObject<(HTMLDivElement | null)[]>;
  refsSymbolsCenter: React.MutableRefObject<(HTMLDivElement | null)[]>;
  refsSymbolsRight: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function MachineButtonSpin({
  classNamePrefix,
  refReelLeft,
  refReelCenter,
  refReelRight,
  refsSymbolsLeft,
  refsSymbolsCenter,
  refsSymbolsRight,
}: IMachineButtonSpin): JSX.Element {
  const dispatch = useDispatch();
  const { stateDebugMode, stateSlotCanBePlayed } = useSelector(rdxSlotSelector);


  const spinButtonOnClickHandlerAsync = async (): Promise<void> => {
    // Reset the Reels: begin
    refReelLeft.current?.scrollTo({ top: 0 });
    refReelCenter.current?.scrollTo({ top: 0 });
    refReelRight.current?.scrollTo({ top: 0 });
    // Reset the Reels: end

    // Get/Set the Lucky Positions: Begin
    const luckyPositions = {
      left: stateDebugMode.isActive ? stateDebugMode.luckyPositions.left : generateRandomNumberBetween(0, 2),
      center: stateDebugMode.isActive ? stateDebugMode.luckyPositions.center : generateRandomNumberBetween(0, 2),
      right: stateDebugMode.isActive ? stateDebugMode.luckyPositions.right : generateRandomNumberBetween(0, 2),
    };
    // Get/Set the Lucky Positions: end

    // Get/Set the Lucky Numbers: Begin
    const minSymbolsCountForRandom = symbolsValuesAsArrayOfNumber.length * 2;
    const maxSymbolsCountForRandom = (symbolsValuesAsArrayOfNumber.length * constants.settings.dataDuplication) - (2 * symbolsValuesAsArrayOfNumber.length);
    const luckyNumbers = {
      left: stateDebugMode.isActive ? stateDebugMode.luckyNumbers.left : generateRandomNumberBetween(minSymbolsCountForRandom, maxSymbolsCountForRandom),
      center: stateDebugMode.isActive ? stateDebugMode.luckyNumbers.center : generateRandomNumberBetween(minSymbolsCountForRandom, maxSymbolsCountForRandom),
      right: stateDebugMode.isActive ? stateDebugMode.luckyNumbers.right : generateRandomNumberBetween(minSymbolsCountForRandom, maxSymbolsCountForRandom),
    };
    // Get/Set the Lucky Numbers: end

    // Reels and Symbols Definition: begin
    const symbolLeft = refsSymbolsLeft.current[luckyNumbers.left];
    const symbolCenter = refsSymbolsCenter.current[luckyNumbers.center];
    const symbolRight = refsSymbolsRight.current[luckyNumbers.right];
    const reelLeft = refReelLeft.current;
    const reelCenter = refReelCenter.current;
    const reelRight = refReelRight.current;
    // Reels and Symbols Definition: end

    // Reels and Symbols are existed
    if (symbolLeft && symbolCenter && symbolRight && reelLeft && reelCenter && reelRight) {
      // Reset && Spining effect
      dispatch(rdxSlotSpinningHasEndedAsync(false));
      dispatch(rdxSlotSpinningAnimationAsync());

      // Achievements: begin
      const topSymbol1 = refsSymbolsLeft.current[luckyNumbers.left - luckyPositions.left];
      const topSymbol2 = refsSymbolsCenter.current[luckyNumbers.center - luckyPositions.center];
      const topSymbol3 = refsSymbolsRight.current[luckyNumbers.right - luckyPositions.right];
      const centerSymbol1 = refsSymbolsLeft.current[luckyNumbers.left - luckyPositions.left + 1];
      const centerSymbol2 = refsSymbolsCenter.current[luckyNumbers.center - luckyPositions.center + 1];
      const centerSymbol3 = refsSymbolsRight.current[luckyNumbers.right - luckyPositions.right + 1];
      const bottomSymbol1 = refsSymbolsLeft.current[luckyNumbers.left - luckyPositions.left + 2];
      const bottomSymbol2 = refsSymbolsCenter.current[luckyNumbers.center - luckyPositions.center + 2];
      const bottomSymbol3 = refsSymbolsRight.current[luckyNumbers.right - luckyPositions.right + 2];
      const achievements = {
        achievementsTop: [
          +(topSymbol1?.dataset.achievement || 0) as ESymbols,
          +(topSymbol2?.dataset.achievement || 0) as ESymbols,
          +(topSymbol3?.dataset.achievement || 0) as ESymbols,
        ],
        achievementsCenter: [
          +(centerSymbol1?.dataset.achievement || 0) as ESymbols,
          +(centerSymbol2?.dataset.achievement || 0) as ESymbols,
          +(centerSymbol3?.dataset.achievement || 0) as ESymbols,
        ],
        achievementsBottom: [
          +(bottomSymbol1?.dataset.achievement || 0) as ESymbols,
          +(bottomSymbol2?.dataset.achievement || 0) as ESymbols,
          +(bottomSymbol3?.dataset.achievement || 0) as ESymbols,
        ],
        visibleIndexesLeft: {
          top: (luckyNumbers.left - luckyPositions.left),
          center: (luckyNumbers.left - luckyPositions.left + 1),
          bottom: (luckyNumbers.left - luckyPositions.left + 2),
        },
        visibleIndexesCenter: {
          top: (luckyNumbers.center - luckyPositions.center),
          center: (luckyNumbers.center - luckyPositions.center + 1),
          bottom: (luckyNumbers.center - luckyPositions.center + 2),
        },
        visibleIndexesRight: {
          top: (luckyNumbers.right - luckyPositions.right),
          center: (luckyNumbers.right - luckyPositions.right + 1),
          bottom: (luckyNumbers.right - luckyPositions.right + 2),
        },
      };
      dispatch(rdxSlotAchievementsAsync(achievements));
      // Achievements: end

      // Spin the Reels: begin
      const scrollTopLeft = (symbolLeft.offsetTop - reelLeft.offsetTop) - (luckyPositions.left * symbolLeft.offsetHeight);
      const scrollTopCenter = (symbolCenter.offsetTop - reelCenter.offsetTop) - (luckyPositions.center * symbolCenter.offsetHeight);
      const scrollTopRight = (symbolRight.offsetTop - reelRight.offsetTop) - (luckyPositions.right * symbolRight.offsetHeight);
      await Promise.all([
        elementScrollToWithDurationAsync(reelLeft, scrollTopLeft, (constants.settings.animationDurationAsMS - (2 * constants.settings.animationDurationStepAsMs))),
        elementScrollToWithDurationAsync(reelCenter, scrollTopCenter, (constants.settings.animationDurationAsMS - constants.settings.animationDurationStepAsMs)),
        elementScrollToWithDurationAsync(reelRight, scrollTopRight, constants.settings.animationDurationAsMS),
      ]);
      // Spin the Reels: end

      // Spin has ended
      dispatch(rdxSlotSpinningHasEndedAsync(true));
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
      onClick={stateSlotCanBePlayed ? spinButtonOnClickHandlerAsync : undefined}
      disabled={!stateSlotCanBePlayed}
    >
      <IconSpin className={`${classNamePrefix}__button__icon`} />
      <span>{constants.text.buttonSpin}</span>
    </button>
  );

}

export default MachineButtonSpin;
