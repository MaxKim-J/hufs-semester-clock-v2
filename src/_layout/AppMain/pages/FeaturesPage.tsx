import { css } from '@emotion/react';
import { Text } from '@components/fundamentals/Text';

function FeaturesPage() {
  return (
    <section>
      <div css={expStyle}>으앙</div>;<Text>기능 페이지</Text>
    </section>
  );
}

const expStyle = css`
  color: red;
`;

export default FeaturesPage;
