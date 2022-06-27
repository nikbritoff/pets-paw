import { ReactNode, useEffect } from 'react';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Portal from '../../components/Portal/Portal';
import { useThemeContext } from '../../contexts/ThemeContext';
import Button, { ButtonVariant } from '../Button/Button';
import styles from './Modal.module.scss';

type ModalProps = {
  closeAction: () => void;
  children?: ReactNode;
};

const Modal = ({ closeAction, children }: ModalProps) => {
  const { currentTheme } = useThemeContext();

  useEffect(() => {
    const handleEscPress = (evt: { key: string }) => {
      if (evt.key === 'Escape') {
        closeAction();
        console.log('pressed');
      }
    };

    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  });

  return (
    <Portal>
      <div className={styles.modal} data-theme={currentTheme}>
        <div className={styles.wrapper}>
          <div className={styles.overlay} onClick={closeAction}></div>
          <div className={styles.content}>
            <Button variant={[ButtonVariant.Icon]} onClick={closeAction}>
              <CloseIcon />
            </Button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
