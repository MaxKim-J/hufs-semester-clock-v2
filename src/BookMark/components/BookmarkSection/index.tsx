import { css } from '@emotion/react';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import Spacer from '@components/fundamentals/Spacer';
import DefaultBookmarkList from '@/BookMark/components/BookmarkSection/DefaultBookmarkList';
import CustomBookmarkList from '@/BookMark/components/BookmarkSection/CustomBookmarkList';

function BookMarkSection() {
  return (
    <section css={bookmarkSectionStyle}>
      <Heading tag="h2" css={readableHiddenHeading}>
        북마크(즐겨찾기) 리스트
      </Heading>
      <DefaultBookmarkList />
      <Spacer />
      <CustomBookmarkList />
    </section>
  );
}

const bookmarkSectionStyle = css`
  height: 12rem;
`;

export default BookMarkSection;
