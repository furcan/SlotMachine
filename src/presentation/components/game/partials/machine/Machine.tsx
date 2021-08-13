import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { EReelsPositions } from 'application/enumerations/reels';
import { rdxSlotSelector } from 'application/redux';

import ButtonDebug from 'presentation/components/buttons/button-debug/ButtonDebug';
import ButtonAuto from 'presentation/components/buttons/button-auto/ButtonAuto';
import ButtonSpin from 'presentation/components/buttons/button-spin/ButtonSpin';
import Reel from 'presentation/components/game/partials/reel/Reel';

import 'presentation/components/game/partials/machine/Machine.scss';


function Machine(): JSX.Element { // TODO:
  const {
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
        <Reel
          classNamePrefix={'machine__reels'}
          slotData={stateSlotData}
          refReel={refReelLeft}
          refsSymbol={refsSymbolsLeft}
          achievedIndexes={stateSlotAchievements.reelLeftVisibleIndexes}
          position={EReelsPositions.LEFT}
          hasEnded={stateSlotSpinningHasEnded}
        />
        <Reel
          classNamePrefix={'machine__reels'}
          slotData={stateSlotData}
          refReel={refReelCenter}
          refsSymbol={refsSymbolsCenter}
          achievedIndexes={stateSlotAchievements.reelCenterVisibleIndexes}
          position={EReelsPositions.CENTER}
          hasEnded={stateSlotSpinningHasEnded}
        />
        <Reel
          classNamePrefix={'machine__reels'}
          slotData={stateSlotData}
          refReel={refReelRight}
          refsSymbol={refsSymbolsRight}
          achievedIndexes={stateSlotAchievements.reelRightVisibleIndexes}
          position={EReelsPositions.RIGHT}
          hasEnded={stateSlotSpinningHasEnded}
        />
      </div>

      <div className="machine__buttons">
        <ButtonDebug
          classNamePrefix={'machine__buttons'}
        />
        <ButtonAuto
          classNamePrefix={'machine__buttons'}
        />
        <ButtonSpin
          classNamePrefix={'machine__buttons'}
          refReelLeft={refReelLeft}
          refReelCenter={refReelCenter}
          refReelRight={refReelRight}
          refsSymbolsLeft={refsSymbolsLeft}
          refsSymbolsCenter={refsSymbolsCenter}
          refsSymbolsRight={refsSymbolsRight}
        />
      </div>
    </div>
  );
}

export default Machine;
