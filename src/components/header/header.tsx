import {ReactComponent as Logo} from '../../assets/logo.svg';
import styles from './header.module.scss';

function Header(): JSX.Element {
  return (
    <header>
      <a className={styles.link} href='/'>
        <Logo width={106} height={24} title='PetsPaw'/>
      </a>
    </header>
  );
}

export default Header;
