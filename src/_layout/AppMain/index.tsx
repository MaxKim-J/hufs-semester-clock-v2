import { css } from '@emotion/react';
import { Heading } from '@components/fundamentals/Text';
import ScrollSplitLayout from './ScrollSplitLayout';
import Background from '@/Background/components';
import ClockPage from '@/_layout/AppMain/pages/ClockPage';

function AppMain() {
  return (
    <main css={mainSectionStyle} aria-label="메인 정보">
      <Background />
      <ScrollSplitLayout
        sections={[
          {
            id: 0,
            name: '시계',
            content: <ClockPage />,
          },
          {
            id: 1,
            name: '부가기능',
            content: (
              <div
                css={{
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(142, 23, 12, 0.7)',
                }}
              >
                <Heading tag="h1">두번째 레이아웃</Heading>
              </div>
            ),
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
