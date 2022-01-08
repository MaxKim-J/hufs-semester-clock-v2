import MainClockSkeleton from '@/SemesterClock/components/Skeleton/MainClockSkeleton';
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
        }}
        count={1}
        baseColor="#dddddd"
        height="1rem"
        width="20rem"
      />
      <MainClockSkeleton />
    </div>
  );
}

export default ClockSectionSkeleton;
