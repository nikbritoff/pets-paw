import Header from '../Header/Header';
import styles from './Info.module.scss';

const Info = (): JSX.Element => {
  return (
    <>
      <Header />
      <section>
        <p className={styles.caption}>Hi user!</p>
        <h2 className={styles.greeting}>Welcome to study project</h2>
        <p className={styles.invitation}>Lets start using The Dogs API</p>
      </section>
    </>
  );
};

export default Info;
