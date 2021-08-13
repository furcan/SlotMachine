import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { EReelsAlignments } from 'application/enumerations/reels';
import { rdxSlotSelector } from 'application/redux';

import MachineReel from 'presentation/components/game/partials/machine-reel/MachineReel';
import MachineDebug from 'presentation/components/game/partials/machine-debug/MachineDebug';
import MachineButtonDebug from 'presentation/components/game/partials/machine-button-debug/MachineButtonDebug';
import MachineButtonAuto from 'presentation/components/game/partials/machine-button-auto/MachineButtonAuto';
import MachineButtonSpin from 'presentation/components/game/partials/machine-button-spin/MachineButtonSpin';

import 'presentation/components/game/partials/machine/Machine.scss';


function Machine(): JSX.Element { // TODO:
  const {
    stateDebugMode,
    stateSlotIsSpinning,
    stateSlotSpinningHasEnded,
    stateSlotData,
    stateSlotAchievements,
  } = useSelector(rdxSlotSelector);

  const refReelLeft = useRef<HTMLDivElement>(null);
  const refReelCenter = useRef<HTMLDivElement>(null);
  const refReelRight = useRef<HTMLDivElement>(null);
  const refsSymbolsLeft = useRef<(HTMLDivElement | null)[]>([]);
  const refsSymbolsCenter = useRef<(HTMLDivElement | null)[]>([]);
  const refsSymbolsRight = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="machine">
      <div className={[`machine__reels`, `${stateSlotIsSpinning ? 'machine__reels--spinning' : ''}`].join(' ').trim()}>
        <h2 className="machine__reels__title">{constants.text.machineName}</h2>
        <MachineReel
          classNamePrefix={'machine__reels'}
          slotData={stateSlotData}
          refReel={refReelLeft}
          refsSymbols={refsSymbolsLeft}
          achievedIndexes={stateSlotAchievements.visibleIndexesLeft}
          alignment={EReelsAlignments.LEFT}
          hasEnded={stateSlotSpinningHasEnded}
        />
        <MachineReel
          classNamePrefix={'machine__reels'}
          slotData={stateSlotData}
          refReel={refReelCenter}
          refsSymbols={refsSymbolsCenter}
          achievedIndexes={stateSlotAchievements.visibleIndexesCenter}
          alignment={EReelsAlignments.CENTER}
          hasEnded={stateSlotSpinningHasEnded}
        />
        <MachineReel
          classNamePrefix={'machine__reels'}
          slotData={stateSlotData}
          refReel={refReelRight}
          refsSymbols={refsSymbolsRight}
          achievedIndexes={stateSlotAchievements.visibleIndexesRight}
          alignment={EReelsAlignments.RIGHT}
          hasEnded={stateSlotSpinningHasEnded}
        />
      </div>

      <div className="machine__buttons">
        <MachineButtonDebug
          classNamePrefix={'machine__buttons'}
        />
        <MachineButtonAuto
          classNamePrefix={'machine__buttons'}
        />
        <MachineButtonSpin
          classNamePrefix={'machine__buttons'}
          refReelLeft={refReelLeft}
          refReelCenter={refReelCenter}
          refReelRight={refReelRight}
          refsSymbolsLeft={refsSymbolsLeft}
          refsSymbolsCenter={refsSymbolsCenter}
          refsSymbolsRight={refsSymbolsRight}
        />
      </div>

      {(stateDebugMode.isActive && stateDebugMode.isOpen) &&
        <div className="machine__debug">
          <MachineDebug classNamePrefix={'machine__debug'} />
        </div>
      }
    </div>
  );
}

export default Machine;
