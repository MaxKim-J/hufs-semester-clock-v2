import { ReactElement } from 'react';
import TabFooter from '@/_layout/Footer';
import Background from '@/Background/components';

function App(): ReactElement {
  return (
    <main
      css={{
        width: '100%',
        height: '100vh',
      }}
      aria-label="앱 매인!"
    >
      <Background />
      <TabFooter />
    </main>
  );
}

export default App;
