import ThemeContext from '../../hooks/theme-provider/theme-provider';
import Main from '../../pages/main/main';

function App(): JSX.Element {
  return (
    <ThemeContext>
      <Main />
    </ThemeContext>
  );
}

export default App;
