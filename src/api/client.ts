import { QueryClient } from 'react-query';

import { notifyError } from '../utils/notify';

const onError = (): void => {
  notifyError('Load Error');
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError,
    },
    mutations: {
      onError,
    },
  },
});
