import { useSelector } from 'react-redux';

import { rdxSlotSelector } from 'application/redux';

import 'presentation/components/game/partials/debug-mode/DebugMode.scss';


interface IDebugMode {
  classNamePrefix: string;
}

function DebugMode({ classNamePrefix }: IDebugMode): JSX.Element {
  const { stateSlotCanBePlayed, stateDebugMode } = useSelector(rdxSlotSelector);

  return (
    <div className={[`${classNamePrefix}__content`, `${!stateSlotCanBePlayed ? `${classNamePrefix}__content--disabled` : ''}`].join(' ').trim()}>
      <h1>DEBUG MODE</h1>
      <div>
        NEXT numbers will be: ({`${stateDebugMode.luckyNumbers.left}, ${stateDebugMode.luckyNumbers.center}, ${stateDebugMode.luckyNumbers.right}`})
      </div>
      <div>
        NEXT lines will be: ({`${stateDebugMode.luckyLines.left}, ${stateDebugMode.luckyLines.center}, ${stateDebugMode.luckyLines.right}`})
      </div>
    </div>
  );
}

export default DebugMode;
