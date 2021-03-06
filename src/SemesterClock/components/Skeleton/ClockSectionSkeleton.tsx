import Skeleton from 'react-loading-skeleton';

function ClockSectionSkeleton() {
  return (
    <div
      css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Skeleton
        style={{
          opacity: 0.5,
          marginBottom: '0.5rem',
          borderRadius: '2rem',
        }}
        count={1}
        baseColor="#dddddd"
        highlightColor="#898989"
        height="1rem"
        width="20rem"
      />
      <Skeleton
        style={{
          opacity: 0.5,
          borderRadius: '2rem',
        }}
        count={1}
        baseColor="#dddddd"
        highlightColor="#898989"
        height="6rem"
        width="45rem"
      />
      <Skeleton
        style={{
          opacity: 0.5,
          marginTop: '1.2rem',
          borderRadius: '2rem',
        }}
        count={1}
        baseColor="#dddddd"
        highlightColor="#898989"
        height="1rem"
        width="20rem"
      />
    </div>
  );
}

export default ClockSectionSkeleton;
