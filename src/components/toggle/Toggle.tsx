import styles from './Toggle.module.scss';
import cn from 'classnames';

type ToggleProps = {
  name: string,
  isActive: boolean,
  changeAction: () => void,
}

const Toggle = ({ name, isActive, changeAction: cb }: ToggleProps): JSX.Element => {

  const handleToggleChange = () => {
    cb();
  }

  return (
    <>
      <input
        className={cn('visuallyHidden', styles.input)}
        type='checkbox'
        name={name}
        id={name}
        checked={isActive}
        onChange={handleToggleChange}
      >
      </input>
      <label className={styles.label} htmlFor={name}></label>
    </>
  );
};

export default Toggle;
