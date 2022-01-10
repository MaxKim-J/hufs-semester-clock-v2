import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import bookmarkContents from '@shared/data/bookmarkContents';
import BookmarkItem from '@/BookMark/components/BookmarkSection/BookmarkItem';

function DefaultBookmarkList() {
  return (
    <ul css={defaultBookMarksStyle}>
      {bookmarkContents.map((content) => (
        <li css={bookMarkWrapperStyle}>
          <BookmarkItem
            title={content.title}
            url={content.url}
            emoji={content.emoji}
          />
        </li>
      ))}
    </ul>
  );
}

const defaultBookMarksStyle = css`
  display: flex;
`;

const bookMarkWrapperStyle = css`
  margin: 0 ${spaceTable.size16};
`;

export default DefaultBookmarkList;
