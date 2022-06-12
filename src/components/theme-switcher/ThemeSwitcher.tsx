import { Theme } from '../../constants/theme';
import { useThemeContext } from '../../contexts/ThemeContext';
import Toggle from '../toggle/Toggle';
import styles from './ThemeSwitcher.module.scss';
import cn from 'classnames';

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
        onClick={toggleTheme}>
        <span className='visuallyHidden'>Change theme</span>
      </button>
      <Toggle
        name='theme-switcher'
        isActive={isThemeDark}
        changeAction={toggleTheme}
      />
    </div>
  );
}

export default ThemeSwitcher;
