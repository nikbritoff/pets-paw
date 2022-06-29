import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppRoute } from '../../constants/appRoute';
import { ThemeContextProvider } from '../../contexts/ThemeContext';
import Breeds from '../../pages/Breeds/Breeds';
import Gallery from '../../pages/Gallery/Gallery';
import Main from '../../pages/Main/Main';
import Voting from '../../pages/Voting/Voting';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <Router>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path={AppRoute.Main} element={<Main />} />
            <Route path={AppRoute.Breeds} element={<Breeds />} />
            <Route path={AppRoute.Gallery} element={<Gallery />} />
            <Route path={AppRoute.Voting} element={<Voting />} />
          </Routes>
        </QueryClientProvider>
      </ThemeContextProvider>
    </Router>
  );
};

export default App;
