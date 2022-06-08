import { createContext, useState } from 'react';
import { Theme } from '../../constants/theme';

type ContextType = {
  currentTheme: Theme,
  toggleTheme: () => void,
}

type ThemeContextProps = {
  children: React.ReactNode,
}

export const Context = createContext<ContextType>({} as ContextType);

const ThemeContext: React.FC<ThemeContextProps> = (props) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.light);
  const toggleTheme = () => {
    const theme = currentTheme === Theme.dark ? Theme.light : Theme.dark;
    setCurrentTheme(theme);
  }

  return(
    <Context.Provider value={{currentTheme, toggleTheme}}>
      {props.children}
    </Context.Provider>
)};

export default ThemeContext;
