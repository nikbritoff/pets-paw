import { useTranslation } from 'react-i18next';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className={styles.header}>{t('page.gallery')}</h1>
    </MainLayout>
  );
};

export default Gallery;
