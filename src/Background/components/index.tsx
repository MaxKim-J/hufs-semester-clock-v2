import { useRecoilValue } from 'recoil';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import BackgroundContent from '@/Background/components/BackgroundContent';
import { userBackgroundImage } from '@/Background/atoms';

function Background() {
  const userBackground = useRecoilValue(userBackgroundImage);
  return (
    <>
      {userBackground.status === 'initialized' && (
        <AsyncBoundaryWithQuery pendingFallback={null}>
          <BackgroundContent />
        </AsyncBoundaryWithQuery>
      )}
    </>
  );
}

export default Background;
