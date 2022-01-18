import { lazy } from 'react';
import { css } from '@emotion/react';
import ScrollSplitLayout from './ScrollSplitLayout';
import Background from '@/Background/components';

const FeaturesPage = lazy(
  () => import(/* webpackChunkName: "featuresPage" */ './pages/FeaturesPage')
);
const ClockPage = lazy(
  () =>
    import(
      /* webpackChunkName: "clockPage" */ '@/_layout/AppMain/pages/ClockPage'
    )
);

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
            content: <FeaturesPage />,
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
