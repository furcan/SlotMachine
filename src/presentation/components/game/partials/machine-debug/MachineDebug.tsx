import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EReelsPositions } from 'application/enumerations/reels';
import { ESymbols, ESymbolsPositions, symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { generateRandomThresholdNumberForDebugMode } from 'application/helpers';
import { rdxSlotSelector, rdxSlotLuckyLinesForDebugModeAsync, rdxSlotLuckyNumbersForDebugModeAsync } from 'application/redux';

import MachineDebugReel from 'presentation/components/game/partials/machine-debug-reel/MachineDebugReel';

import 'presentation/components/game/partials/machine-debug/MachineDebug.scss';


interface IMachineDebug {
  classNamePrefix: string;
}

function MachineDebug({ classNamePrefix }: IMachineDebug): JSX.Element {
  const dispatch = useDispatch();
  const { stateSlotCanBePlayed, stateDebugMode } = useSelector(rdxSlotSelector);

  // eslint-disable-next-line
  const [positionTop, setPositionTop] = useState<ESymbolsPositions>(ESymbolsPositions.CENTER);
  // eslint-disable-next-line
  const [positionCenter, setPositionCenter] = useState<ESymbolsPositions>(ESymbolsPositions.CENTER);
  // eslint-disable-next-line
  const [positionBottom, setPositionBottom] = useState<ESymbolsPositions>(ESymbolsPositions.CENTER);
  const [symbolLeft, setSymbolLeft] = useState<number>(generateRandomThresholdNumberForDebugMode() + ESymbols.SEVEN);
  const [symbolCenter, setSymbolCenter] = useState<number>(generateRandomThresholdNumberForDebugMode() + ESymbols.SEVEN);
  const [symbolRight, setSymbolRight] = useState<number>(generateRandomThresholdNumberForDebugMode() + ESymbols.SEVEN);

  const luckyLinesOnClickHandlerAsync = useCallback(async (): Promise<void> => {
    const debugLuckyLines = {
      left: positionTop,
      center: positionCenter,
      right: positionBottom,
    };
    dispatch(rdxSlotLuckyLinesForDebugModeAsync(debugLuckyLines));
  }, [positionTop, positionCenter, positionBottom, dispatch]);


  const luckyNumbersOnClickHandlerAsync = useCallback(async (): Promise<void> => {
    const debugLuckyNumbers = {
      left: symbolLeft,
      center: symbolCenter,
      right: symbolRight,
    };
    dispatch(rdxSlotLuckyNumbersForDebugModeAsync(debugLuckyNumbers));
  }, [symbolLeft, symbolCenter, symbolRight, dispatch]);

  useEffect(() => {
    if (positionTop || positionCenter || positionBottom) {
      luckyLinesOnClickHandlerAsync();
    }
    if (symbolLeft || symbolCenter || symbolRight) {
      luckyNumbersOnClickHandlerAsync();
    }
  }, [
    positionTop,
    positionCenter,
    positionBottom,
    symbolLeft,
    symbolCenter,
    symbolRight,
    luckyLinesOnClickHandlerAsync,
    luckyNumbersOnClickHandlerAsync,
  ]);

  return (
    <div className={[`${classNamePrefix}__content`, `${!stateSlotCanBePlayed ? `${classNamePrefix}__content--disabled` : ''}`].join(' ').trim()}>
      <h1>DEBUG MODE</h1>
      <div>
        luckyLines will be: ({`${stateDebugMode.luckyLines.left}, ${stateDebugMode.luckyLines.center}, ${stateDebugMode.luckyLines.right}`})
      </div>
      <div>
        luckyNumbers will be: ({`${stateDebugMode.luckyNumbers.left}, ${stateDebugMode.luckyNumbers.center}, ${stateDebugMode.luckyNumbers.right}`})
      </div>

      <div className={`${classNamePrefix}__reels`}>
        <MachineDebugReel
          classNamePrefix={classNamePrefix}
          position={EReelsPositions.LEFT}
          symbols={symbolsValuesAsArrayOfNumber}
          symbolActive={symbolLeft % 10}
          symbolOnClickHandler={setSymbolLeft}
        />
        <MachineDebugReel
          classNamePrefix={classNamePrefix}
          position={EReelsPositions.CENTER}
          symbols={symbolsValuesAsArrayOfNumber}
          symbolActive={symbolCenter % 10}
          symbolOnClickHandler={setSymbolCenter}
        />
        <MachineDebugReel
          classNamePrefix={classNamePrefix}
          position={EReelsPositions.RIGHT}
          symbols={symbolsValuesAsArrayOfNumber}
          symbolActive={symbolRight % 10}
          symbolOnClickHandler={setSymbolRight}
        />
      </div>

    </div>
  );
}

export default MachineDebug;
