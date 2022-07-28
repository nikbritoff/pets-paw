import cn from 'classnames';
import i18next from 'i18next';

import { Lng } from '../../constants/lng';
import Toggle from '../Toggle/Toggle';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = (): JSX.Element => {
  const isEnglish = i18next.language === Lng.en;
  const changeLanguage = () => {
    const nextLanguage = i18next.language === Lng.ru ? Lng.en : Lng.ru;
    i18next.changeLanguage(nextLanguage);
  };

  return (
    <div className={styles.switcherWrapper}>
      <button
        className={cn(
          styles.lngButton,
          isEnglish ? styles.lngButtonEn : styles.lngButtonRu,
        )}
        onClick={changeLanguage}
      >
        <span className="visuallyHidden">Change language</span>
      </button>
      <Toggle
        name="lng-switcher"
        isActive={isEnglish}
        changeAction={changeLanguage}
      />
    </div>
  );
};

export default LanguageSwitcher;
