import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import useLink from '../../hooks/useLink/useLink';
import Button, { ButtonSize } from '../../shared/Button/Button';
import styles from './CardChapter.module.scss';

type CardActionProps = {
  to: string;
};

const CardAction = ({ to }: CardActionProps): JSX.Element => {
  const { isActive, currentPage } = useLink(to);
  const { t } = useTranslation();

  return (
    <div className={cn(styles.card, isActive && styles.active)}>
      <div className={cn(styles.image, styles[currentPage])}></div>
      <Button to={to} size={ButtonSize.Wide}>
        {t(`page.${currentPage}`)}
      </Button>
    </div>
  );
};

export default CardAction;
