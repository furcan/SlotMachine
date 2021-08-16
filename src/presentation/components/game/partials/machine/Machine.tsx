import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { constants } from 'application/constants';
import { EReelsAlignments } from 'application/enumerations/reels';
import { rdxSlotSelector } from 'application/redux';

import MachineReel from 'presentation/components/game/partials/machine-reel/MachineReel';
import MachineDebug from 'presentation/components/game/partials/machine-debug/MachineDebug';
import MachineCoinsModal from 'presentation/components/game/partials/machine-coins-modal/MachineCoinsModal';
import MachineButtonDebug from 'presentation/components/game/partials/machine-button-debug/MachineButtonDebug';
import MachineButtonAuto from 'presentation/components/game/partials/machine-button-auto/MachineButtonAuto';
import MachineButtonSpin from 'presentation/components/game/partials/machine-button-spin/MachineButtonSpin';
import MachineButtonAddCoin from 'presentation/components/game/partials/machine-button-addcoin/MachineButtonAddCoin';

import 'presentation/components/game/partials/machine/Machine.scss';


function Machine(): JSX.Element {
  const {
    stateDebugMode,
    stateSlotCoinsModalIsOpen,
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

  const showIndicators = constants.settings.showSucceededIndicatior && stateSlotSpinningHasEnded;

  return (
    <div className="machine">
      <div className={[`machine__reels`, `${stateSlotIsSpinning ? 'machine__reels--spinning' : ''}`].join(' ').trim()}>
        <h2 className="machine__reels__title">{constants.text.game.machineName}</h2>
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

        <div className="machine__lever">
          <MachineButtonSpin
            classNamePrefix={'machine__lever'}
            refReelLeft={refReelLeft}
            refReelCenter={refReelCenter}
            refReelRight={refReelRight}
            refsSymbolsLeft={refsSymbolsLeft}
            refsSymbolsCenter={refsSymbolsCenter}
            refsSymbolsRight={refsSymbolsRight}
          />
        </div>
        {(showIndicators && stateSlotAchievements.achievementTop > 0) &&
          <span className="machine__reels__indicator machine__reels__indicator--top"></span>
        }
        {(showIndicators && stateSlotAchievements.achievementCenter > 0) &&
          <span className="machine__reels__indicator machine__reels__indicator--center"></span>
        }
        {(showIndicators && stateSlotAchievements.achievementBottom > 0) &&
          <span className="machine__reels__indicator machine__reels__indicator--bottom"></span>
        }
      </div>

      <div className="machine__buttons">
        <MachineButtonSpin
          classNamePrefix={'machine__buttons'}
          refReelLeft={refReelLeft}
          refReelCenter={refReelCenter}
          refReelRight={refReelRight}
          refsSymbolsLeft={refsSymbolsLeft}
          refsSymbolsCenter={refsSymbolsCenter}
          refsSymbolsRight={refsSymbolsRight}
        />
        <MachineButtonDebug
          classNamePrefix={'machine__buttons'}
        />
        <MachineButtonAuto
          classNamePrefix={'machine__buttons'}
        />
        <MachineButtonAddCoin
          classNamePrefix={'machine__buttons'}
        />
      </div>

      {(stateDebugMode.isActive && stateDebugMode.isModalOpen) &&
        <div className="machine__debug">
          <MachineDebug classNamePrefix={'machine__debug'} />
        </div>
      }

      {stateSlotCoinsModalIsOpen &&
        <div className="machine__coinsmodal">
          <MachineCoinsModal classNamePrefix={'machine__coinsmodal'} />
        </div>
      }
    </div>
  );
}

export default Machine;
