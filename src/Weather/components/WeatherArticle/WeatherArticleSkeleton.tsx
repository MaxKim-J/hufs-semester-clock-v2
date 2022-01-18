import Skeleton from 'react-loading-skeleton';

function WeatherArticleSkeleton() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Skeleton
          style={{
            margin: '0.5rem 0',
            borderRadius: '2rem',
          }}
          count={1}
          baseColor="#afafaf"
          highlightColor="#dbdbdb"
          height="1rem"
          width="13rem"
        />
        <Skeleton
          style={{
            margin: '0.5rem 0',
            borderRadius: '2rem',
          }}
          count={1}
          baseColor="#afafaf"
          highlightColor="#dbdbdb"
          height="1rem"
          width="5rem"
        />
      </div>
      <Skeleton
        style={{
          borderRadius: '1rem',
        }}
        count={1}
        baseColor="#afafaf"
        highlightColor="#dbdbdb"
        height="7.2rem"
        width="29rem"
      />
    </div>
  );
}

export default WeatherArticleSkeleton;
