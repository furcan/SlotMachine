import { EReelsPositions, getReelsPositionsDesc } from 'application/enumerations/reels';
import { TReduxSlotData, IReduxSlotVisibleIndexes } from 'application/redux';

import 'presentation/components/game/partials/reel/Reel.scss';


interface IReel {
  classNamePrefix: string;
  slotData: TReduxSlotData;
  refReel: React.RefObject<HTMLDivElement>;
  refsSymbol: React.MutableRefObject<(HTMLDivElement | null)[]>;
  achievedIndexes: IReduxSlotVisibleIndexes;
  position: EReelsPositions,
  hasEnded: boolean;
}

function Reel({ classNamePrefix, slotData, refReel, refsSymbol, achievedIndexes, position, hasEnded }: IReel): JSX.Element {
  return (
    <div className={`${classNamePrefix}__reel ${classNamePrefix}__reel--${getReelsPositionsDesc(position)}`} ref={refReel}>
      {slotData?.map((symbol: string, index: number) => {
        const classNameTop = hasEnded && achievedIndexes.top === index ? 'state--top' : '';
        const classNameCenter = hasEnded && achievedIndexes.center === index ? 'state--center' : '';
        const classNameBottom = hasEnded && achievedIndexes.bottom === index ? 'state--bottom' : '';

        return (
          <div
            key={index}
            ref={_this => refsSymbol.current[index] = _this}
            data-achievement={symbol}
            className={[`${classNamePrefix}__reel__symbol`, classNameTop, classNameCenter, classNameBottom].join(' ').trim()}
          >
            <span>{`${symbol} - ${index + 1}`}</span>
          </div>
        );
      })}
    </div>
  );

}

export default Reel;
