import { constants } from 'application/constants';
import { EReelsPositions, getReelsPositionsValue } from 'application/enumerations/reels';
import { ESymbols, getSymbolsValue } from 'application/enumerations/symbols';
import { generateRandomThresholdNumberForDebugMode } from 'application/helpers';

import 'presentation/components/debug/partials/debug-reel/DebugReel.scss';


interface IDebugReel {
  classNamePrefix: string;
  position: EReelsPositions;
  symbols: ESymbols[];
  symbolActive: number;
  symbolOnClickHandler: React.Dispatch<React.SetStateAction<ESymbols>>;
}

function DebugReel({ classNamePrefix, position, symbols, symbolActive, symbolOnClickHandler }: IDebugReel): JSX.Element {
  console.log(symbolActive);
  return (
    <div className={[`${classNamePrefix}__reel`, `${classNamePrefix}__reel--${getReelsPositionsValue(position)}`].join(' ').trim()}>
      {symbols.map((symbol: ESymbols, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className={[`${classNamePrefix}__reel__symbol`, `${symbolActive === symbol ? `${classNamePrefix}__reel__symbol--active` : ''}`].join(' ').trim()}
            onClick={() => symbolOnClickHandler(generateRandomThresholdNumberForDebugMode() + symbol)}
          >
            <img className={`${classNamePrefix}__reel__symbol__image`} src={getSymbolsValue(symbol)} width="40" height="34" alt={constants.app.name} />
          </button>
        );
      })}
    </div>
  );
}

export default DebugReel;
