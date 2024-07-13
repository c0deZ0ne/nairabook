import ReactDOM from 'react-dom/client';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.ts';
import App from './App.tsx';
import { ModalProvider } from './features/modal/modal.context.tsx';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './redux/queryClinet.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {' '}
          <ModalProvider>
            <QueryClientProvider client={queryClient}>
              <App />
              {/* <ReactQueryDevtools /> */}
            </QueryClientProvider>
          </ModalProvider>
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
