import { constants } from 'application/constants';
import { EReelsAlignments, getReelsAlignmentsValue } from 'application/enumerations/reels';
import { ESymbols, getSymbolsValue } from 'application/enumerations/symbols';
import { TReduxSlotData, IReduxSlotVisibleIndexes } from 'application/redux';

import 'presentation/components/game/partials/machine-reel/MachineReel.scss';


interface IMachineReel {
  classNamePrefix: string;
  slotData: TReduxSlotData;
  refReel: React.RefObject<HTMLDivElement>;
  refsSymbols: React.MutableRefObject<(HTMLDivElement | null)[]>;
  achievedIndexes: IReduxSlotVisibleIndexes;
  alignment: EReelsAlignments,
  hasEnded: boolean;
}

function MachineReel({ classNamePrefix, slotData, refReel, refsSymbols, achievedIndexes, alignment, hasEnded }: IMachineReel): JSX.Element {
  return (
    <div className={`${classNamePrefix}__reel ${classNamePrefix}__reel--${getReelsAlignmentsValue(alignment)}`} ref={refReel}>
      {slotData?.map((symbol: ESymbols, index: number) => {
        const classNameTop = hasEnded && achievedIndexes.top === index && index > 0 ? 'state--top' : '';
        const classNameCenter = hasEnded && achievedIndexes.center === index && index > 0 ? 'state--center' : '';
        const classNameBottom = hasEnded && achievedIndexes.bottom === index && index > 0 ? 'state--bottom' : '';

        return (
          <div
            key={index}
            ref={_this => refsSymbols.current[index] = _this}
            data-achievement={symbol}
            className={[`${classNamePrefix}__reel__symbol`, classNameTop, classNameCenter, classNameBottom].join(' ').trim()}
          >
            <img className={`${classNamePrefix}__reel__symbol__image`} src={getSymbolsValue(symbol)} width="90" height="77" alt={constants.app.name} />
          </div>
        );
      })}
    </div>
  );

}

export default MachineReel;
