import { lazy, useEffect } from 'react';
import { css } from '@emotion/react';
import WifiFallback from '@components/error/WifiFallback';
import ScrollSplitLayout from './ScrollSplitLayout';
import Background from '@/Background/components';

const ClockPage = lazy(
  () =>
    import(
      /* webpackChunkName: "clockPage" */ '@/_layout/AppMain/pages/ClockPage'
    )
);

const WidgetsPage = lazy(
  () => import(/* webpackChunkName: "widgetsPage" */ './pages/WidgetsPage')
);

function AppMain() {
  useEffect(() => {
    import('./pages/WidgetsPage');
  }, []);

  return (
    <main css={mainSectionStyle}>
      <Background />
      {navigator.onLine ? (
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
      ) : (
        <WifiFallback />
      )}
    </main>
  );
}

const mainSectionStyle = css`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default AppMain;
