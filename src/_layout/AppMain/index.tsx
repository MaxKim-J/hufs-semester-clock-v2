import { css } from '@emotion/react';
import { Heading } from '@components/fundamentals/Text';
import ScrollSplitLayout from './ScrollSplitLayout';
import Background from '@/Background/components';

function AppMain() {
  return (
    <main css={mainSectionStyle} aria-label="메인 정보">
      <Background />
      <ScrollSplitLayout
        sections={[
          {
            id: 0,
            name: '시계',
            content: <Heading tag="h1">첫번째 레이아웃</Heading>,
          },
          {
            id: 1,
            name: '부가기능',
            content: <Heading tag="h1">두번째 레이아웃</Heading>,
          },
        ]}
      />
    </main>
  );
}

const mainSectionStyle = css`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default AppMain;
