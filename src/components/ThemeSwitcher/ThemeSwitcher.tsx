import cn from 'classnames';

import { Theme } from '../../constants/theme';
import { useThemeContext } from '../../contexts/ThemeContext';
import Toggle from '../Toggle/Toggle';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = (): JSX.Element => {
  const { currentTheme, toggleTheme } = useThemeContext();
  const isThemeDark = currentTheme === Theme.dark;

  return (
    <div className={styles.switcherWrapper}>
      <button
        className={cn(
          styles.themeButton,
          isThemeDark ? styles.themeButtonDark : styles.themeButtonLight,
        )}
        onClick={toggleTheme}
      >
        <span className="visuallyHidden">Change theme</span>
      </button>
      <Toggle
        name="theme-switcher"
        isActive={isThemeDark}
        changeAction={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
