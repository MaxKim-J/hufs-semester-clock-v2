import Skeleton from 'react-loading-skeleton';

function UserInfoSectionSkeleton() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '90px',
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
      <Skeleton
        style={{
          opacity: 0.5,
          marginBottom: '0.5rem',
          borderRadius: '2rem',
        }}
        count={1}
        baseColor="#dddddd"
        highlightColor="#898989"
        height="1.5rem"
        width="10rem"
      />
    </div>
  );
}

export default UserInfoSectionSkeleton;
