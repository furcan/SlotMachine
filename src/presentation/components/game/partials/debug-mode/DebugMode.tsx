import { useSelector } from 'react-redux';

import { rdxSlotSelector } from 'application/redux';

import 'presentation/components/game/partials/debug-mode/DebugMode.scss';


interface IDebugMode {
  classNamePrefix: string;
}

function DebugMode({ classNamePrefix }: IDebugMode): JSX.Element {
  const { stateSlotCanBePlayed, stateSlotLuckyNumbers, stateSlotLuckyLines } = useSelector(rdxSlotSelector);

  return (
    <div className={[`${classNamePrefix}__content`, `${!stateSlotCanBePlayed ? `${classNamePrefix}__content--disabled` : ''}`].join(' ').trim()}>
      <h1>DEBUG MODE</h1>
      <div>
        NEXT numbers will be: ({`${stateSlotLuckyNumbers.left}, ${stateSlotLuckyNumbers.center}, ${stateSlotLuckyNumbers.right}`})
      </div>
      <div>
        NEXT lines will be: ({`${stateSlotLuckyLines.left}, ${stateSlotLuckyLines.center}, ${stateSlotLuckyLines.right}`})
      </div>
    </div>
  );
}

export default DebugMode;
