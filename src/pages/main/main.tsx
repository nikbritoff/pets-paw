import cn from 'classnames';
import { useContext } from 'react';
import { Context } from '../../hooks/theme-provider/theme-provider';
import styles from './main.module.scss';
import CardAction from '../../components/card-chapter/card-chapter';
import contentBg from '../../assets/main-content-bg.png';
import contentBg2x from '../../assets/main-content-bg@2x.png';
import Info from '../../components/info/info';

function Main(): JSX.Element {
  const {currentTheme, toggleTheme} = useContext(Context);
  return (
    <main className={styles.main} data-theme={currentTheme}>
      <section
        className={cn(
          styles.section,
          styles.info,
        )}
      >
        <Info />
        <section className={styles['cards-list']}>
          <CardAction chapter='voting'/>
          <CardAction chapter='breeds'/>
          <CardAction chapter='gallery'/>
        </section>
        <button onClick={toggleTheme}>{currentTheme}</button>
      </section>
      <section className={cn(
        styles.section,
        styles.content,
      )}
      >
        <img
          className={styles.image}
          src={contentBg}
          srcSet={`${contentBg2x} 2x`}
          alt='girls and pet'
          width='100%'
        />
        <div className={styles['content-wrapper']}>
        </div>
      </section>
    </main>
  );
}

export default Main;
