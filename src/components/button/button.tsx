import { useContext } from 'react';
import { Context } from '../../hooks/theme-provider/theme-provider';
import styles from './button.module.scss';

function Button(): JSX.Element {
  const {currentTheme, toggleTheme} = useContext(Context);

  return (    
    <button
      className={styles.button}
      onClick={toggleTheme}
    >
      {currentTheme}
    </button>
  );
}

export default Button;
