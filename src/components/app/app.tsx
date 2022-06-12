import { ThemeContextProvider } from '../../contexts/ThemeContext';
import Main from '../../pages/main/main';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}

export default App;
