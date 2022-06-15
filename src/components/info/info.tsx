import styles from './Info.module.scss';
import Header from '../Header/Header';

const Info = (): JSX.Element => {
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
};

export default Info;
