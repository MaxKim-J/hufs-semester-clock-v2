import React, { ReactElement, useEffect } from 'react';
import { getItem } from '@/_shared/services/storage';

function App(): ReactElement {
  useEffect(() => {
    b();
  }, []);

  const b = async () => {
    const a = await getItem('dd');
    return a;
  };

  return (
    <main aria-label="Dd">
      <h1>외대 종강시계 V2</h1>
      <h2>메뉴</h2>
      <section role="contentinfo" aria-label="dd">
        <h2>메뉴</h2>
        <p>본문</p>
        <a href="/">태그</a>
      </section>
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
