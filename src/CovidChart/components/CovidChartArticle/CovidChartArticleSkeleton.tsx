import Skeleton from 'react-loading-skeleton';

function CovidChartArticleSkeleton() {
  return (
    <div>
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

export default CovidChartArticleSkeleton;
