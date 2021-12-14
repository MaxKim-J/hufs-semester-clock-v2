import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import * as Sentry from '@sentry/react';
import { RecoilRoot } from 'recoil';
import { Integrations } from '@sentry/tracing';
import GlobalStyle from '@/_shared/styles/GlobalStyle';
import App from './App';

if (process.env.ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      notifyOnChangeProps: ['data', 'error'],
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
    {process.env.ENV === 'development' ? (
      <ReactQueryDevtools initialIsOpen={false} />
    ) : null}
  </QueryClientProvider>,
  document.querySelector('#app')
);
