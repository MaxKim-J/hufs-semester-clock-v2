import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import BackgroundContainer from '@/Background/components/BackgroundContent';

function Background() {
  return (
    <AsyncBoundaryWithQuery
      rejectedFallback={() => <div>reject</div>}
      pendingFallback={
        <div
          css={{
            position: 'absolute',
            top: 0,
            zIndex: 5,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
          }}
        >
          로딩이다
        </div>
      }
    >
      <BackgroundContainer />
    </AsyncBoundaryWithQuery>
  );
}

export default Background;
