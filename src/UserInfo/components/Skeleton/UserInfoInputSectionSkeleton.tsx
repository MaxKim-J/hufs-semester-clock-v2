import Skeleton from 'react-loading-skeleton';

function UserInfoInputSectionSkeleton() {
  return (
    <div>
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
        width="90%"
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
        width="100%"
      />
    </div>
  );
}

export default UserInfoInputSectionSkeleton;
