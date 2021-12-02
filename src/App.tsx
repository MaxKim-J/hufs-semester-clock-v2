import { ReactElement, useState } from 'react';
import Tab from '@/_shared/components/fundamentals/Tab';
import Spacer from '@/_shared/components/fundamentals/Spacer';
import BoxLayout from '@/_shared/components/fundamentals/BoxLayout';
import DotSwitch from '@/_shared/components/fundamentals/DotSwitch';

function App(): ReactElement {
  const [pointer, setPointer] = useState(0);

  return (
    <main
      css={{
        width: '100%',
        backgroundColor: 'green',
      }}
      aria-label="Dd"
    >
      <nav
        style={{
          width: '100%',
          position: 'absolute',
          top: '50%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DotSwitch
          tooltip="시계"
          onClick={(key) => {
            setPointer(key);
            console.log('시계');
          }}
          activateId={pointer}
          id={0}
        />
        <Spacer height="xSmall" />
        <DotSwitch
          tooltip="부가기능"
          onClick={(key) => {
            setPointer(key);
            console.log('부가기능');
          }}
          activateId={pointer}
          id={1}
        />
      </nav>
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
    </main>
  );
}

export default App;
