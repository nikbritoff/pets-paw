import { useTranslation } from 'react-i18next';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import styles from './Breeds.module.scss';

const Breeds = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className={styles.header}>{t('page.breeds')}</h1>
    </MainLayout>
  );
};

export default Breeds;
