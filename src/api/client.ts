import { QueryClient } from 'react-query';

const onError = (): void => {
  console.log('Load Error');
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
