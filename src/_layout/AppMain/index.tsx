import { lazy } from 'react';
import { css } from '@emotion/react';
import ScrollSplitLayout from './ScrollSplitLayout';
import Background from '@/Background/components';

const WidgetsPage = lazy(
  () => import(/* webpackChunkName: "featuresPage" */ './pages/WidgetsPage')
);
const ClockPage = lazy(
  () =>
    import(
      /* webpackChunkName: "clockPage" */ '@/_layout/AppMain/pages/ClockPage'
    )
);

function AppMain() {
  return (
    <main css={mainSectionStyle}>
      <Background />
      <ScrollSplitLayout
        sections={[
          {
            id: 0,
            name: '시계 페이지',
            content: <ClockPage />,
          },
          {
            id: 1,
            name: '위젯 페이지',
            content: <WidgetsPage />,
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
