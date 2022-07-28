import cn from 'classnames';
import i18next from 'i18next';

import { Theme } from '../../constants/theme';
import { useThemeContext } from '../../contexts/ThemeContext';
import Toggle from '../Toggle/Toggle';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = (): JSX.Element => {
  const { currentTheme, toggleTheme } = useThemeContext();
  const isThemeDark = currentTheme === Theme.dark;
  const changeLanguage = () => {
    const nextLanguage = i18next.language === 'ru' ? 'en' : 'ru';
    i18next.changeLanguage(nextLanguage);
  };

  return (
    <div className={styles.switcherWrapper}>
      <button
        className={cn(
          styles.themeButton,
          isThemeDark ? styles.themeButtonDark : styles.themeButtonLight,
        )}
        onClick={changeLanguage}
      >
        {i18next.language}
        <span className="visuallyHidden">Change language</span>
      </button>
      <Toggle
        name="theme-switcher"
        isActive={isThemeDark}
        changeAction={toggleTheme}
      />
    </div>
  );
};

export default LanguageSwitcher;
