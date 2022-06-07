import logo from '../../assets/icons/logo.svg';
import styles from './app.module.scss';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p className={styles['App-text']}>
          PetsPaw project
        </p>
      </header>
    </div>
  );
}

export default App;
