import { ErrorBoundary, Provider } from '@rollbar/react';
import { ReactElement } from 'react';
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { rollbar, rollbarConfig } from '../../utils/rollbar';

type ErrorDisplayProps = {
  error?: Error;
  // resetError: Function,
};

const ErrorDisplay = ({
  error,
}: ErrorDisplayProps): ReactElement => ( // <-- props passed to fallbackUI component
  <div>
    <h1>A following error has occured:</h1>
    <p>{error?.message || 'unknown error'}</p>
  </div>
);

const App = (): JSX.Element => {
  return (
    // <Provider instance={rollbar}>
    <Provider config={rollbarConfig}>
      <ErrorBoundary
        fallbackUI={<ErrorDisplay />}
        // level="warn"
        // errorMessage="Error in my react App"
        // extra={{ additional: 'data' }}
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
