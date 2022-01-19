import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import ClockSection from '@/SemesterClock/components/ClockSection';
import UserInfoSection from '@/UserInfo/components/UserInfoArticle';
import BookMarkSection from '@/BookMark/components/BookmarkSection';

function ClockPage() {
  return (
    <section css={clockPageStyle}>
      <Heading tag="h1" css={readableHiddenHeading}>
        시계 기능 컨텐츠
      </Heading>
      <ClockSection />
      <Spacer />
      <UserInfoSection />
      <Spacer height="size32" />
      <BookMarkSection />
    </section>
  );
}

const clockPageStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ClockPage;
