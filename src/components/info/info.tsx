import styles from './info.module.scss';
import Header from '../header/header';

function Info(): JSX.Element {
  return (
    <>
    <Header />
      <section>
        <p className={styles.caption}>Hi intern!</p>
        <h2 className={styles.greeting}>Welcome to MSI 2021 Front-end test</h2>
        <p className={styles.invitation}>Lets start using The Dogs API</p>
      </section>
    </>
  );
}

export default Info;
