import styles from './MainLayout.module.scss';
import cn from 'classnames';
import Info from '../../components/Info/Info';
import CardAction from '../../components/CardChapter/CardChapter';
import { useThemeContext } from '../../contexts/ThemeContext';
import { ReactNode } from 'react';
import { AppRoute } from '../../constants/appRoute';

type MainLayoutProps = {
  children: ReactNode;
  className?: string;
};

const MainLayout = ({ children, className = '' }: MainLayoutProps) => {
  const { currentTheme, toggleTheme } = useThemeContext();

  return (
    <main className={styles.main} data-theme={currentTheme}>
      <section className={cn(styles.section, styles.info)}>
        <Info />
        <section className={styles.cardsList}>
          <CardAction to={AppRoute.Voting} />
          <CardAction to={AppRoute.Breeds} />
          <CardAction to={AppRoute.Gallery} />
        </section>
        <button onClick={toggleTheme}>{currentTheme}</button>
      </section>
      <section className={cn(styles.section, styles.content, className)}>
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
