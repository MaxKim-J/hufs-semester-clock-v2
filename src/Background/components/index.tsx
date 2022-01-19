import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import BackgroundContainer from '@/Background/components/BackgroundContent';

function Background() {
  return (
    <AsyncBoundaryWithQuery pendingFallback={null}>
      <BackgroundContainer />
    </AsyncBoundaryWithQuery>
  );
}

export default Background;
