import React, { ReactElement, useState } from 'react';
import { Link, Text, Heading } from '@/_shared/components/fundamentals/Text';
import Divider from '@/_shared/components/fundamentals/Divider';
import Button from '@/_shared/components/fundamentals/Button';
import SwitchInput from '@/_shared/components/fundamentals/Input/SwitchInput';
import SelectInput from '@/_shared/components/fundamentals/Input/SelectInput';
import { TextInput } from '@/_shared/components/fundamentals/Input';

function App(): ReactElement {
  const [isOn, setIsOn] = useState(false);
  const [select, setSelect] = useState('');

  return (
    <main aria-label="Dd">
      <h1>외대 종강시계 V2</h1>
      <h2>메뉴</h2>
      <Link href="/">링크 컴포넌트</Link>
      <SelectInput
        title="이거슨 이런 폼"
        items={['dd', 'bb', 'cc']}
        onChange={(value: string) => {
          setSelect(value);
          console.log(value);
        }}
      />
      <SwitchInput
        checked={isOn}
        onToggle={(a) => {
          setIsOn(a);
          console.log(a);
        }}
        title="음음"
      />
      <Button
        disabled
        type="button"
        onClick={() => {
          console.log('ddd');
        }}
      >
        안뇽
      </Button>
      <Divider margin="normal" color="darkGray" />
      <Text color="darkGray">안뇽</Text>
      <Heading tag="h1" color="gray">
        dd
      </Heading>
      <Heading tag="h2">dd</Heading>
      <Heading tag="h3">dd</Heading>
      <Heading tag="h4">dd</Heading>
      <Heading tag="h5">dd</Heading>
      <section role="contentinfo" aria-label="dd">
        <h2>메뉴</h2>
        <p>본문</p>
        <a href="/">태그</a>
      </section>
      <ul>
        <li>하나</li>
        <li>둘</li>
        <li>셋</li>
      </ul>
      <ol>
        <li>하나</li>
        <li>둘</li>
        <li>셋</li>
      </ol>
      <div>
        <h2>인생</h2>
        <article aria-label="으앙">
          <div>음..</div>
        </article>
        <article>
          <h3>배고픔</h3>
        </article>
        <form aria-label="학번과 학년을 입력하세요">
          <input type="text" title="학번 입력" />
          <input type="text" title="이름 입력" />
        </form>
      </div>
      <footer>
        <p>푸터</p>
      </footer>
    </main>
  );
}

export default App;
