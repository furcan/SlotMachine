import { VscSync as IconAuto } from 'react-icons/vsc';

import { constants } from 'application/constants';

import 'presentation/components/buttons/button-auto/ButtonAuto.scss';


interface IButtonAuto {
  classNamePrefix: string;
}

function ButtonAuto({ classNamePrefix }: IButtonAuto): JSX.Element {
  return (
    <button
      type="button"
      className={[
        `${classNamePrefix}__button`,
        `${classNamePrefix}__button--auto`,
      ].join(' ').trim()}
    >
      <IconAuto className={`${classNamePrefix}__button__icon`} />
      <span>{constants.text.buttonAuto}</span>
    </button>
  );

}

export default ButtonAuto;
