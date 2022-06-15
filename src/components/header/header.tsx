import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { AppRoute } from '../../constants/appRoute';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to={AppRoute.Main}>
        <Logo width={106} height={24} title="PetsPaw" />
      </Link>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
