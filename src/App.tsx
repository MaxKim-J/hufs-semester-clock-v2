import { ReactElement, useState } from 'react';
import Spacer from '@/_shared/components/fundamentals/Spacer';
import BoxLayout from '@/_shared/components/fundamentals/BoxLayout';
import DotSwitch from '@/_shared/components/fundamentals/DotSwitch';
import TextAreaInput from '@/_shared/components/fundamentals/Input/TextAreaInput';

function App(): ReactElement {
  const [pointer, setPointer] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState('');

  return (
    <main
      css={{
        width: '100%',
        backgroundColor: 'green',
      }}
      aria-label="Dd"
    >
      <form css={{ width: '300px' }}>
        <TextAreaInput
          value={textAreaValue}
          title="앱 개선사항"
          placeholder="앱에 대한 개선사항을 200자 이내로 입력해주세요!"
          onChange={(v) => {
            setTextAreaValue(v);
          }}
        />
      </form>

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
