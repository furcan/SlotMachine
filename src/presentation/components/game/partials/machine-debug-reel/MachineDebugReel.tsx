import { constants } from 'application/constants';
import { EReelsAlignments, getReelsAlignmentsValue } from 'application/enumerations/reels';
import { ESymbols, getSymbolsValue, symbolsValuesAsArrayOfNumber } from 'application/enumerations/symbols';
import { generateRandomThresholdNumberForDebugMode } from 'application/helpers';

import 'presentation/components/game/partials/machine-debug-reel/MachineDebugReel.scss';


interface IMachineDebugReel {
  classNamePrefix: string;
  alignment: EReelsAlignments;
  symbolActive: number;
  symbolOnClickHandler: React.Dispatch<React.SetStateAction<ESymbols>>;
}

function MachineDebugReel({ classNamePrefix, alignment, symbolActive, symbolOnClickHandler }: IMachineDebugReel): JSX.Element {
  return (
    <div className={[`${classNamePrefix}__reel`, `${classNamePrefix}__reel--${getReelsAlignmentsValue(alignment)}`].join(' ').trim()}>
      {symbolsValuesAsArrayOfNumber.map((symbol: ESymbols, index: number) => {
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

export default MachineDebugReel;
