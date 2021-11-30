import { ReactElement } from 'react';
import { css } from '@emotion/react';
import Tab from '@/_shared/components/fundamentals/Tab';
import Spacer from '@/_shared/components/fundamentals/Spacer';

function App(): ReactElement {
  return (
    <main
      css={{
        backgroundColor: 'gray',
      }}
      aria-label="Dd"
    >
      <Spacer height="xxxLarge" />
      <Spacer height="xxxLarge" />
      <Spacer height="xxxLarge" />
      <Spacer height="xxxLarge" />
      <Tab title="설정">
        <div>알맹알맹이!</div>
      </Tab>
    </main>
  );
}

export default App;
