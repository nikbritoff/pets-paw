import { ErrorBoundary, Provider } from '@rollbar/react';
import { QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { queryClient } from '../../api/client';
import { AppRoute } from '../../constants/appRoute';
import { ThemeContextProvider } from '../../contexts/ThemeContext';
import Breeds from '../../pages/Breeds/Breeds';
import Gallery from '../../pages/Gallery/Gallery';
import Main from '../../pages/Main/Main';
import Voting from '../../pages/Voting/Voting';
import { rollbarConfig } from '../../utils/rollbar';

const App = (): JSX.Element => {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary
        level="warn"
        errorMessage="Error in my react App"
        extra={{ additional: 'data' }}
      >
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
            <ToastContainer />
          </ThemeContextProvider>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
