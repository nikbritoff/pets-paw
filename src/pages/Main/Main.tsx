import { useState } from 'react';
import { useQuery } from 'react-query';

import contentBg from '../../assets/main-content-bg.png';
import contentBg2x from '../../assets/main-content-bg@2x.png';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { BreedsService } from '../../services/breeds.service';
import Modal from '../../shared/Modal/Modal';
import styles from './Main.module.scss';

const Main = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { data: res } = useQuery('breeds', () => BreedsService.getAll());
  console.log(res?.data[0]);

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
      {isModalOpen && (
        <Modal closeAction={toggleModal}>
          <p>Some text</p>
        </Modal>
      )}
    </MainLayout>
  );
};

export default Main;
