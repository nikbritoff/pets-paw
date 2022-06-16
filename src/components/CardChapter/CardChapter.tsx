import cn from 'classnames';
import { Link } from 'react-router-dom';

import useLink from '../../hooks/useLink/useLink';
import styles from './CardChapter.module.scss';

type CardActionProps = {
  to: string;
};

const CardAction = ({ to }: CardActionProps): JSX.Element => {
  const { isActive, currentPage } = useLink(to);

  return (
    <div className={cn(styles.card, isActive && styles.active)}>
      <div className={cn(styles.image, styles[currentPage])}></div>
      <Link to={to} className={styles.button}>
        {currentPage}
      </Link>
    </div>
  );
};

export default CardAction;
