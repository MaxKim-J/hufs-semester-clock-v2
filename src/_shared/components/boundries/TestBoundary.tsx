import { ReactChild } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MutableSnapshot, RecoilRoot } from 'recoil';

type TestRendererProps = {
  children: ReactChild | ReactChild[];
  queryClient?: QueryClient;
  recoilState?: (snapShot: MutableSnapshot) => void;
};

function TestBoundary({
  queryClient = new QueryClient({}),
  recoilState = () => {},
  children,
}: TestRendererProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot initializeState={recoilState}>{children}</RecoilRoot>
    </QueryClientProvider>
  );
}

export default TestBoundary;
