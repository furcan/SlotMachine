import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSave as IconClose } from 'react-icons/fi';

import { constants } from 'application/constants';
import { EReelsAlignments } from 'application/enumerations/reels';
import { ESymbols, ESymbolsPositions } from 'application/enumerations/symbols';
import { generateRandomThresholdNumberForDebugMode } from 'application/helpers';
import { rdxSlotSelector, rdxSlotDebugModeLuckyPositionsAsync, rdxSlotDebugModeLuckyNumbersAsync, rdxSlotDebugModeCloseModalAsync } from 'application/redux';

import MachineDebugReel from 'presentation/components/game/partials/machine-debug-reel/MachineDebugReel';
import MachineDebugPosition from 'presentation/components/game/partials/machine-debug-position/MachineDebugPosition';

import 'presentation/components/game/partials/machine-debug/MachineDebug.scss';


interface IMachineDebug {
  classNamePrefix: string;
}

function MachineDebug({ classNamePrefix }: IMachineDebug): JSX.Element {
  const dispatch = useDispatch();
  const { stateSlotCanBePlayed, stateDebugMode } = useSelector(rdxSlotSelector);

  const [positionLeft, setPositionLeft] = useState<ESymbolsPositions>(stateDebugMode.luckyPositions.left || ESymbolsPositions.CENTER);
  const [positionCenter, setPositionCenter] = useState<ESymbolsPositions>(stateDebugMode.luckyPositions.center || ESymbolsPositions.CENTER);
  const [positionRight, setPositionRight] = useState<ESymbolsPositions>(stateDebugMode.luckyPositions.right || ESymbolsPositions.CENTER);
  const [symbolLeft, setSymbolLeft] = useState<number>(generateRandomThresholdNumberForDebugMode() + (stateDebugMode.luckyNumbers.left || ESymbols.SEVEN));
  const [symbolCenter, setSymbolCenter] = useState<number>(generateRandomThresholdNumberForDebugMode() + (stateDebugMode.luckyNumbers.center || ESymbols.SEVEN));
  const [symbolRight, setSymbolRight] = useState<number>(generateRandomThresholdNumberForDebugMode() + (stateDebugMode.luckyNumbers.right || ESymbols.SEVEN));

  const luckyPositionsOnClickHandlerAsync = useCallback(async (): Promise<void> => {
    const debugLuckyPositions = {
      left: positionLeft,
      center: positionCenter,
      right: positionRight,
    };
    dispatch(rdxSlotDebugModeLuckyPositionsAsync(debugLuckyPositions));
  }, [positionLeft, positionCenter, positionRight, dispatch]);


  const luckyNumbersOnClickHandlerAsync = useCallback(async (): Promise<void> => {
    const debugLuckyNumbers = {
      left: symbolLeft,
      center: symbolCenter,
      right: symbolRight,
    };
    dispatch(rdxSlotDebugModeLuckyNumbersAsync(debugLuckyNumbers));
  }, [symbolLeft, symbolCenter, symbolRight, dispatch]);

  const closeDebugModalOnClickHandlerAsync = async (): Promise<void> => {
    dispatch(rdxSlotDebugModeCloseModalAsync());
  };

  useEffect(() => {
    luckyPositionsOnClickHandlerAsync();
    luckyNumbersOnClickHandlerAsync();
  }, [
    luckyPositionsOnClickHandlerAsync,
    luckyNumbersOnClickHandlerAsync,
  ]);

  return (
    <div className={[`${classNamePrefix}__content`, `${!stateSlotCanBePlayed ? `${classNamePrefix}__content--disabled` : ''}`].join(' ').trim()}>
      <div className={`${classNamePrefix}__head`}>
        <h2 className={`${classNamePrefix}__head__title`}>{constants.text.debugMode.title}</h2>
        <p className={`${classNamePrefix}__head__description`}>{constants.text.debugMode.description}</p>
        <button type="button" className={`${classNamePrefix}__head__close`} onClick={closeDebugModalOnClickHandlerAsync}>
          <IconClose />
        </button>
      </div>

      <div className={`${classNamePrefix}__symbols`}>
        <h3 className={`${classNamePrefix}__symbols__title`}>{constants.text.debugMode.symbols}</h3>
        <MachineDebugReel
          classNamePrefix={classNamePrefix}
          alignment={EReelsAlignments.LEFT}
          symbolActive={symbolLeft % 10}
          symbolOnClickHandler={setSymbolLeft}
        />
        <MachineDebugReel
          classNamePrefix={classNamePrefix}
          alignment={EReelsAlignments.CENTER}
          symbolActive={symbolCenter % 10}
          symbolOnClickHandler={setSymbolCenter}
        />
        <MachineDebugReel
          classNamePrefix={classNamePrefix}
          alignment={EReelsAlignments.RIGHT}
          symbolActive={symbolRight % 10}
          symbolOnClickHandler={setSymbolRight}
        />
      </div>

      <div className={`${classNamePrefix}__positions`}>
        <h3 className={`${classNamePrefix}__positions__title`}>{constants.text.debugMode.positions}</h3>
        <MachineDebugPosition
          classNamePrefix={classNamePrefix}
          alignment={EReelsAlignments.LEFT}
          positionActive={positionLeft}
          positionOnClickHandler={setPositionLeft}
        />
        <MachineDebugPosition
          classNamePrefix={classNamePrefix}
          alignment={EReelsAlignments.CENTER}
          positionActive={positionCenter}
          positionOnClickHandler={setPositionCenter}
        />
        <MachineDebugPosition
          classNamePrefix={classNamePrefix}
          alignment={EReelsAlignments.RIGHT}
          positionActive={positionRight}
          positionOnClickHandler={setPositionRight}
        />
      </div>
    </div>
  );
}

export default MachineDebug;
