import { css } from '@emotion/react';
import { Text } from '@components/fundamentals/Text';
import Skeleton from 'react-loading-skeleton';

function FeaturesPage() {
  return (
    <section>
      <div css={expStyle}>으앙</div>
      <Text>기능 페이지</Text>
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
    </section>
  );
}

const expStyle = css`
  color: red;
`;

export default FeaturesPage;
