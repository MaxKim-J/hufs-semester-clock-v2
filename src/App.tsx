import { ReactElement, lazy } from 'react';
import AppMain from '@/_layout/AppMain';

const TabFooter = lazy(() => import('@/_layout/Footer'));

function App(): ReactElement {
  return (
    <>
      <AppMain />
      <TabFooter />
    </>
  );
}

export default App;
