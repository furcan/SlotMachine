import { VscDebugAlt as IconDebug } from 'react-icons/vsc';

import { constants } from 'application/constants';


import 'presentation/components/buttons/button-debug/ButtonDebug.scss';


interface IButtonDebug {
  classNamePrefix: string;
}

function ButtonDebug({ classNamePrefix }: IButtonDebug): JSX.Element {
  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--debug`,
        `${classNamePrefix}__button--passive`,
      ].join(' ').trim()}
    >
      <IconDebug className={`${classNamePrefix}__button__icon`} />
      <span>{constants.text.buttonDebug}</span>
    </button>
  );

}

export default ButtonDebug;
