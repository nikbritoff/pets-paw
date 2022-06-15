import { ThemeContextProvider } from '../../contexts/ThemeContext';
import Main from '../../pages/Main/Main';

const App = (): JSX.Element => {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
};

export default App;
