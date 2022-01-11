import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import DefaultBookmarkList from '@/BookMark/components/BookmarkSection/DefaultBookmarkList';
import CustomBookmarkList from '@/BookMark/components/BookmarkSection/CustomBookmarkList';

function BookMarkSection() {
  return (
    <section css={bookmarkSectionStyle}>
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
