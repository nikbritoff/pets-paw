import styles from './Main.module.scss';
import contentBg from '../../assets/main-content-bg.png';
import contentBg2x from '../../assets/main-content-bg@2x.png';
import MainLayout from '../../layouts/MainLayout/MainLayout';

const Main = (): JSX.Element => {
  return (
    <MainLayout>
      <img
        className={styles.image}
        src={contentBg}
        srcSet={`${contentBg2x} 2x`}
        alt="Girl and pet"
        width="100"
      />
      <div className={styles['content-wrapper']}></div>
    </MainLayout>
  );
};

export default Main;
