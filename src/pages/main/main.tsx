import styles from './main.module.scss';
import Button from '../../components/button/button';
import logo from '../../assets/icons/logo.svg';
import { useContext } from 'react';
import { Context } from '../../hooks/theme-provider/theme-provider';

function Main(): JSX.Element {
  const {currentTheme} = useContext(Context);
  return (
    <div className={styles.main} data-theme={currentTheme}>
      <header className={styles['header']}>
        <img src={logo} className={styles['logo']} alt='logo' />
        <p className={styles['text']}>
          PetsPaw project
        </p>
        <Button />
      </header>
    </div>
  );
}

export default Main;
