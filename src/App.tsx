import { ReactElement } from 'react';
import Tab from '@/_shared/components/fundamentals/Tab';
import Spacer from '@/_shared/components/fundamentals/Spacer';
import BoxLayout from '@/_shared/components/fundamentals/BoxLayout';

function App(): ReactElement {
  return (
    <main
      css={{
        width: '100%',
        backgroundColor: 'green',
      }}
      aria-label="Dd"
    >
      <Spacer height="xxxLarge" />
      <Spacer height="xxxLarge" />
      <BoxLayout title="외대 날씨">
        <div
          css={{
            width: '20rem',
            height: '10rem',
          }}
        >
          날씨날씨
        </div>
      </BoxLayout>
      <Spacer height="xxxLarge" />
      <Spacer height="xxxLarge" />
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
      >
        <Tab title="설정">
          <div>알맹알맹이!</div>
        </Tab>
        <Tab title="개발자소개" direction="right">
          <div>알맹알맹이!</div>
        </Tab>
      </div>
    </main>
  );
}

export default App;
