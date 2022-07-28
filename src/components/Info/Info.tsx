import { useTranslation } from 'react-i18next';

import Header from '../Header/Header';
import styles from './Info.module.scss';

const Info = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section>
        <p className={styles.caption}>{t('welcome.caption')}</p>
        <h2 className={styles.greeting}>{t('welcome.greeting')}</h2>
        <p className={styles.invitation}>{t('welcome.invitation')}</p>
      </section>
    </>
  );
};

export default Info;
