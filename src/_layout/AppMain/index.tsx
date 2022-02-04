import { lazy, useEffect } from 'react';
import ScrollSplitLayout from './ScrollSplitLayout';

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
    <main>
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

export default AppMain;
