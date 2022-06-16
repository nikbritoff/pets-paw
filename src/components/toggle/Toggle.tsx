import cn from 'classnames';

import styles from './Toggle.module.scss';

type ToggleProps = {
  name: string;
  isActive: boolean;
  changeAction: () => void;
};

const Toggle = ({ name, isActive, changeAction }: ToggleProps): JSX.Element => {
  return (
    <>
      <input
        className={cn('visuallyHidden', styles.input)}
        type="checkbox"
        name={name}
        id={name}
        checked={isActive}
        onChange={changeAction}
      ></input>
      <label className={styles.label} htmlFor={name}></label>
    </>
  );
};

export default Toggle;
