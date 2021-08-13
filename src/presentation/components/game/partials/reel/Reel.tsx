import { constants } from 'application/constants';
import { EReelsPositions, getReelsPositionsValue } from 'application/enumerations/reels';
import { ESymbols, getSymbolsValue } from 'application/enumerations/symbols';
import { TReduxSlotData, IReduxSlotVisibleIndexes } from 'application/redux';

import 'presentation/components/game/partials/reel/Reel.scss';


interface IReel {
  classNamePrefix: string;
  slotData: TReduxSlotData;
  refReel: React.RefObject<HTMLDivElement>;
  refsSymbols: React.MutableRefObject<(HTMLDivElement | null)[]>;
  achievedIndexes: IReduxSlotVisibleIndexes;
  position: EReelsPositions,
  hasEnded: boolean;
}

function Reel({ classNamePrefix, slotData, refReel, refsSymbols, achievedIndexes, position, hasEnded }: IReel): JSX.Element {
  return (
    <div className={`${classNamePrefix}__reel ${classNamePrefix}__reel--${getReelsPositionsValue(position)}`} ref={refReel}>
      {slotData?.map((symbol: ESymbols, index: number) => {
        const classNameTop = hasEnded && achievedIndexes.top === index ? 'state--top' : '';
        const classNameCenter = hasEnded && achievedIndexes.center === index ? 'state--center' : '';
        const classNameBottom = hasEnded && achievedIndexes.bottom === index ? 'state--bottom' : '';

        return (
          <div
            key={index}
            ref={_this => refsSymbols.current[index] = _this}
            data-achievement={symbol}
            data-index={index} // TODO: will be removed after dev, just an indicator
            className={[`${classNamePrefix}__reel__symbol`, classNameTop, classNameCenter, classNameBottom].join(' ').trim()}
          >
            <img className={`${classNamePrefix}__reel__symbol__image`} src={getSymbolsValue(symbol)} width="90" height="77" alt={constants.app.name} />
          </div>
        );
      })}
    </div>
  );

}

export default Reel;
