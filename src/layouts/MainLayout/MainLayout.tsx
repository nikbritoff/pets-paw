import cn from 'classnames';
import { ReactNode } from 'react';

import CardAction from '../../components/CardChapter/CardChapter';
import Info from '../../components/Info/Info';
import { AppRoute } from '../../constants/appRoute';
import { useThemeContext } from '../../contexts/ThemeContext';
import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
  className?: string;
};

const MainLayout = ({ children, className = '' }: MainLayoutProps) => {
  const { currentTheme } = useThemeContext();

  return (
    <main className={styles.main} data-theme={currentTheme}>
      <section className={cn(styles.section, styles.info)}>
        <Info />
        <section className={styles.cardsList}>
          <CardAction to={AppRoute.Voting} />
          <CardAction to={AppRoute.Breeds} />
          <CardAction to={AppRoute.Gallery} />
        </section>
      </section>
      <section className={cn(styles.section, styles.content, className)}>
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
