import { useTranslation } from 'react-i18next';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import styles from './Voting.module.scss';

const Voting = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className={styles.header}>{t('page.voting')}</h1>
    </MainLayout>
  );
};

export default Voting;
