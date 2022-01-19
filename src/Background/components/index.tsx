import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import BackgroundContainer from '@/Background/components/BackgroundContent';

function Background() {
  return (
    <AsyncBoundaryWithQuery
      rejectedFallback={() => <div>reject</div>}
      pendingFallback={null}
    >
      <BackgroundContainer />
    </AsyncBoundaryWithQuery>
  );
}

export default Background;
