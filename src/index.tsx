import React from 'react';
import ReactDOM from 'react-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@/_shared/styles/GlobalStyle';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: ['data', 'error'],
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <LazyMotion features={domAnimation}>
        <GlobalStyle />
        <App />
      </LazyMotion>
    </RecoilRoot>
    {process.env.ENV === 'development' ? (
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    ) : null}
  </QueryClientProvider>,
  document.querySelector('#app')
);
