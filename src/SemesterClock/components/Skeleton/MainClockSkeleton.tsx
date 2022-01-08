import Skeleton from 'react-loading-skeleton';

function MainClockSkeleton() {
  return (
    <Skeleton
      style={{
        opacity: 0.5,
      }}
      count={1}
      baseColor="#dddddd"
      height="6rem"
      width="42rem"
    />
  );
}

export default MainClockSkeleton;
