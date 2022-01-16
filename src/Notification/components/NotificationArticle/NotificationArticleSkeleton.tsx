import Skeleton from 'react-loading-skeleton';

function NotificationArticleSkeleton() {
  return (
    <div>
      <Skeleton
        style={{
          margin: '1rem 0 ',
          borderRadius: '2rem',
        }}
        count={1}
        baseColor="#afafaf"
        highlightColor="#898989"
        height="1rem"
        width="15rem"
      />
      <Skeleton
        style={{
          marginBottom: '0.5rem',
          borderRadius: '2rem',
        }}
        count={5}
        baseColor="#afafaf"
        highlightColor="#898989"
        height="1rem"
        width="28rem"
      />
      <Skeleton
        style={{
          marginTop: '1rem',
          borderRadius: '2rem',
        }}
        count={1}
        baseColor="#afafaf"
        highlightColor="#898989"
        height="1.5rem"
        width="8rem"
      />
    </div>
  );
}

export default NotificationArticleSkeleton;
