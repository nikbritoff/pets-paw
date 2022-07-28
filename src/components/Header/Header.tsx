import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { AppRoute } from '../../constants/appRoute';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to={AppRoute.Main}>
        <Logo width={106} height={24} title="PetsPaw" />
      </Link>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
