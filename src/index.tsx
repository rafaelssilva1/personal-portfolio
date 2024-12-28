import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LoadingContext } from './context/loading/LoadingContext';
import { ThemeContext } from './context/theme/ThemeContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContext>
        <LoadingContext>
          <App />
        </LoadingContext>
      </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>
);
