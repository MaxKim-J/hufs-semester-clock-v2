import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import BackgroundContainer from '@/Background/components/BackgroundContent';

function Background() {
  return (
    <AsyncBoundaryWithQuery
      pendingFallback={<div>로딩</div>}
      rejectedFallback={() => <div>로딩</div>}
    >
      <BackgroundContainer />
    </AsyncBoundaryWithQuery>
  );
}

export default Background;
