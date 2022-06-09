import styles from './card-chapter.module.scss';
import cn from 'classnames';

type CardActionProps = {
  chapter: string,
}

function CardAction({chapter}: CardActionProps): JSX.Element {
  const isActive = chapter === 'voting';
  console.log(isActive);
  return (
    <div className={cn(
      styles.card,
      isActive && styles.active,
      )}>
      <div className={cn(
  styles.image,
  styles[chapter],
      )}>
      </div>
      <button 
        className={styles.button}
      >
        {chapter}
      </button>
    </div>
  )
}

export default CardAction;
