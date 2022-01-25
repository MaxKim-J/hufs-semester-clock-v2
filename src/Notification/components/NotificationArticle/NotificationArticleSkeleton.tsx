import Skeleton from 'react-loading-skeleton';

function NotificationArticleSkeleton() {
  return (
    <div>
      <Skeleton
        style={{
          margin: '1rem 0',
          borderRadius: '1rem',
        }}
        count={1}
        baseColor="#afafaf"
        highlightColor="#dbdbdb"
        height="1rem"
        width="13rem"
      />
      <Skeleton
        style={{
          borderRadius: '1rem',
        }}
        count={1}
        baseColor="#afafaf"
        highlightColor="#dbdbdb"
        height="9rem"
        width="29rem"
      />
      <Skeleton
        style={{
          margin: '1rem 0',
          borderRadius: '1rem',
        }}
        count={1}
        baseColor="#afafaf"
        highlightColor="#dbdbdb"
        height="1.5rem"
        width="8rem"
      />
    </div>
  );
}

export default NotificationArticleSkeleton;
