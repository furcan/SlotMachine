import { EReelsAlignments, getReelsAlignmentsDescription } from 'application/enumerations/reels';
import { ESymbolsPositions, getSymbolsPositionsAsFC, symbolsPositionsValuesAsArrayOfNumber } from 'application/enumerations/symbols';

import 'presentation/components/game/partials/machine-debug-position/MachineDebugPosition.scss';


interface IMachineDebugPosition {
  classNamePrefix: string;
  alignment: EReelsAlignments;
  positionActive: number;
  positionOnClickHandler: React.Dispatch<React.SetStateAction<ESymbolsPositions>>;
}

function MachineDebugPositions({ classNamePrefix, alignment, positionActive, positionOnClickHandler }: IMachineDebugPosition): JSX.Element {
  return (
    <div className={[`${classNamePrefix}__position`, `${classNamePrefix}__position--${getReelsAlignmentsDescription(alignment)}`].join(' ').trim()}>
      {symbolsPositionsValuesAsArrayOfNumber.map((position: ESymbolsPositions, index: number) => {
        const IconAsComponent = getSymbolsPositionsAsFC(position);
        return (
          <button
            key={index}
            type="button"
            className={[`${classNamePrefix}__position__item`, `${positionActive === position ? `${classNamePrefix}__position__item--active` : ''}`].join(' ').trim()}
            onClick={() => positionOnClickHandler(position)}
          >
            <IconAsComponent />
          </button>
        );
      })}
    </div>
  );
}

export default MachineDebugPositions;
