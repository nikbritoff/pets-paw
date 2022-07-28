import { useState } from 'react';

import { useBreeds } from '../../api/hooks';
import contentBg from '../../assets/main-content-bg.png';
import contentBg2x from '../../assets/main-content-bg@2x.png';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Modal from '../../shared/Modal/Modal';
import styles from './Main.module.scss';

const Main = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const { data: breeds } = useBreeds();
  console.log(breeds?.data[0]);

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
      {open && (
        <Modal closeAction={closeModal}>
          <p>Some text</p>
        </Modal>
      )}
    </MainLayout>
  );
};

export default Main;
