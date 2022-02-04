import { css } from '@emotion/react';
import WifiFallback from '@components/error/WifiFallback';
import MobileFallback from '@components/error/MobileFallback';
import Background from '@/Background/components';
import AppMain from '@/_layout/AppMain';
import TabFooter from '@/_layout/Footer';

function App() {
  const isOffline = !navigator.onLine;
  const isMobile = window.innerWidth < 500;
  return (
    <div css={appWrapperStyle}>
      <Background />
      {isOffline && <WifiFallback />}
      {isMobile && process.env.IS_WEB && <MobileFallback />}
      {!isOffline && !isMobile && (
        <>
          <AppMain />
          <TabFooter />
        </>
      )}
    </div>
  );
}

const appWrapperStyle = css`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default App;
