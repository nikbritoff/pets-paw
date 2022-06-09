import { useContext } from 'react';
import { Theme } from '../../constants/theme';
import { Context } from '../../hooks/theme-provider/theme-provider';
import lightLogo from '../../assets/light-logo.svg';
import darkLogo from '../../assets/dark-logo.svg';

function Header(): JSX.Element {
  const {currentTheme} = useContext(Context);
  return (
    <header>
      <a href='/'>
        <img
          src={currentTheme === Theme.light ? lightLogo : darkLogo}
          alt='PetsPaw'
          width={106}
          height={24}
        />
      </a>
    </header>
  );
}

export default Header;
