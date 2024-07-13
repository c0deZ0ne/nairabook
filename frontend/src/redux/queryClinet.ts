import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError(err) {},
    },
    mutations: {
      onError(error, variables, context) {},
    },
  },
});

export { queryClient, QueryClientProvider };
