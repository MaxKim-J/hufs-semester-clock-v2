import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import bookmarkContents from '@shared/data/bookmarkContents';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import BookmarkItem from '@/BookMark/components/BookmarkSection/BookmarkItem';

function DefaultBookmarkList() {
  return (
    <article aria-labelledby="default-bookmark-heading">
      <Heading
        id="default-bookmark-heading"
        tag="h3"
        css={readableHiddenHeading}
      >
        기본 제공 북마크 목록
      </Heading>
      <ul css={defaultBookMarksStyle}>
        {bookmarkContents.map((bookmark) => (
          <li css={bookMarkWrapperStyle} key={bookmark.id}>
            <BookmarkItem bookmark={bookmark} />
          </li>
        ))}
      </ul>
    </article>
  );
}

const defaultBookMarksStyle = css`
  display: flex;
`;

const bookMarkWrapperStyle = css`
  margin: 0 ${spaceTable.size16};
`;

export default DefaultBookmarkList;
