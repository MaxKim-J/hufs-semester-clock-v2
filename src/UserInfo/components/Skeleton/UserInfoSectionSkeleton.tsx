import Skeleton from 'react-loading-skeleton';

function UserInfoSectionSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '4rem',
      }}
    >
      <Skeleton
        style={{
          opacity: 0.5,
          marginBottom: '0.5rem',
          borderRadius: '2rem',
        }}
        count={2}
        baseColor="#dddddd"
        highlightColor="#898989"
        height="1.3rem"
        width="20rem"
      />
    </div>
  );
}

export default UserInfoSectionSkeleton;
