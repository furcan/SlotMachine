import { useDispatch, useSelector } from 'react-redux';
import { VscSettings as IconSpin } from 'react-icons/vsc';

import { constants } from 'application/constants';
import { ESymbols, symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { elementScrollToWithDurationAsync, generateRandomNumberBetween } from 'application/helpers';
import { rdxSlotSelector, rdxSlotIsSpinningAsync, rdxSlotHasEndedAsync, rdxSlotAchievementsAsync } from 'application/redux';

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
  const { stateDebugMode, stateSlotCanBePlayed } = useSelector(rdxSlotSelector);


  const spinButtonOnClickHandlerAsync = async (): Promise<void> => {
    // Reset the Reels: begin
    refReelLeft.current?.scrollTo({ top: 0 });
    refReelCenter.current?.scrollTo({ top: 0 });
    refReelRight.current?.scrollTo({ top: 0 });
    // Reset the Reels: end

    // Get/Set the Lucky Lines: Begin
    const luckyLines = {
      left: stateDebugMode.isActive ? stateDebugMode.luckyLines.left : generateRandomNumberBetween(0, 2),
      center: stateDebugMode.isActive ? stateDebugMode.luckyLines.center : generateRandomNumberBetween(0, 2),
      right: stateDebugMode.isActive ? stateDebugMode.luckyLines.right : generateRandomNumberBetween(0, 2),
    };
    // Get/Set the Lucky Lines: end

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
    const symbolLeft = refsSymbolsLeft.current[luckyNumbers.left - 1];
    const symbolCenter = refsSymbolsCenter.current[luckyNumbers.center - 1];
    const symbolRight = refsSymbolsRight.current[luckyNumbers.right - 1];
    const reelLeft = refReelLeft.current;
    const reelCenter = refReelCenter.current;
    const reelRight = refReelRight.current;
    // Reels and Symbols Definition: end

    // Reels and Symbols are existed
    if (symbolLeft && symbolCenter && symbolRight && reelLeft && reelCenter && reelRight) {
      // Spining effect
      dispatch(rdxSlotIsSpinningAsync());

      // Achievements: begin
      const topLineSymbol1 = refsSymbolsLeft.current[luckyNumbers.left - luckyLines.left - 1];
      const topLineSymbol2 = refsSymbolsCenter.current[luckyNumbers.center - luckyLines.center - 1];
      const topLineSymbol3 = refsSymbolsRight.current[luckyNumbers.right - luckyLines.right - 1];
      const centerLineSymbol1 = refsSymbolsLeft.current[luckyNumbers.left - luckyLines.left];
      const centerLineSymbol2 = refsSymbolsCenter.current[luckyNumbers.center - luckyLines.center];
      const centerLineSymbol3 = refsSymbolsRight.current[luckyNumbers.right - luckyLines.right];
      const bottomLineSymbol1 = refsSymbolsLeft.current[luckyNumbers.left - luckyLines.left + 1];
      const bottomLineSymbol2 = refsSymbolsCenter.current[luckyNumbers.center - luckyLines.center + 1];
      const bottomLineSymbol3 = refsSymbolsRight.current[luckyNumbers.right - luckyLines.right + 1];
      const achievements = {
        lineTopAchievements: [
          +(topLineSymbol1?.dataset.achievement || 0) as ESymbols,
          +(topLineSymbol2?.dataset.achievement || 0) as ESymbols,
          +(topLineSymbol3?.dataset.achievement || 0) as ESymbols,
        ],
        lineCenterAchievements: [
          +(centerLineSymbol1?.dataset.achievement || 0) as ESymbols,
          +(centerLineSymbol2?.dataset.achievement || 0) as ESymbols,
          +(centerLineSymbol3?.dataset.achievement || 0) as ESymbols,
        ],
        lineBottomAchievements: [
          +(bottomLineSymbol1?.dataset.achievement || 0) as ESymbols,
          +(bottomLineSymbol2?.dataset.achievement || 0) as ESymbols,
          +(bottomLineSymbol3?.dataset.achievement || 0) as ESymbols,
        ],
        reelLeftVisibleIndexes: {
          top: (luckyNumbers.left - luckyLines.left - 1),
          center: (luckyNumbers.left - luckyLines.left),
          bottom: (luckyNumbers.left - luckyLines.left + 1),
        },
        reelCenterVisibleIndexes: {
          top: (luckyNumbers.center - luckyLines.center - 1),
          center: (luckyNumbers.center - luckyLines.center),
          bottom: (luckyNumbers.center - luckyLines.center + 1),
        },
        reelRightVisibleIndexes: {
          top: (luckyNumbers.right - luckyLines.right - 1),
          center: (luckyNumbers.right - luckyLines.right),
          bottom: (luckyNumbers.right - luckyLines.right + 1),
        },
      };
      dispatch(rdxSlotAchievementsAsync(achievements));
      // Achievements: end

      // Spin the Reels: begin
      const scrollTopLeft = (symbolLeft.offsetTop - reelLeft.offsetTop) - (luckyLines.left * symbolLeft.offsetHeight);
      const scrollTopCenter = (symbolCenter.offsetTop - reelCenter.offsetTop) - (luckyLines.center * symbolCenter.offsetHeight);
      const scrollTopRight = (symbolRight.offsetTop - reelRight.offsetTop) - (luckyLines.right * symbolRight.offsetHeight);
      await Promise.all([
        elementScrollToWithDurationAsync(reelLeft, scrollTopLeft, (constants.settings.animationDurationAsMS - (2 * constants.settings.animationDurationStepAsMs))),
        elementScrollToWithDurationAsync(reelCenter, scrollTopCenter, (constants.settings.animationDurationAsMS - constants.settings.animationDurationStepAsMs)),
        elementScrollToWithDurationAsync(reelRight, scrollTopRight, constants.settings.animationDurationAsMS),
      ]);
      // Spin the Reels: end

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
      onClick={stateSlotCanBePlayed ? spinButtonOnClickHandlerAsync : undefined}
      disabled={!stateSlotCanBePlayed}
    >
      <IconSpin className={`${classNamePrefix}__button__icon`} />
      <span>{constants.text.buttonSpin}</span>
    </button>
  );

}

export default ButtonSpin;
