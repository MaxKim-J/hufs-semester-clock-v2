import { ReactElement, useState } from 'react';

import TabFooter from '@/TabFooter/components/TabFooter';

function App(): ReactElement {
  return (
    <main
      css={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'green',
      }}
      aria-label="앱 매인!"
    >
      <TabFooter />
    </main>
  );
}

export default App;
