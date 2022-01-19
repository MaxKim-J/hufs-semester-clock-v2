import Skeleton from 'react-loading-skeleton';

function ClockSettingArticleSkeleton() {
  return (
    <Skeleton
      style={{
        opacity: 0.5,
        borderRadius: '2rem',
      }}
      count={1}
      baseColor="#dddddd"
      highlightColor="#898989"
      height="1.5rem"
      width="22rem"
    />
  );
}

export default ClockSettingArticleSkeleton;
