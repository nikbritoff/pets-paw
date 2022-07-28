import { Provider } from '@rollbar/react';
import { ErrorBoundary } from 'react-error-boundary';
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
import { rollbar } from '../../utils/rollbar';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

const App = (): JSX.Element => {
  return (
    <Provider instance={rollbar}>
      <ErrorBoundary FallbackComponent={ErrorDisplay}>
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
