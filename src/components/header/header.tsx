import { ReactComponent as Logo } from '../../assets/logo.svg';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <a className={styles.link} href='/'>
        <Logo width={106} height={24} title='PetsPaw'/>
      </a>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
