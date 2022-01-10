import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import bookMarkContents from '@shared/data/bookMarkContents';
import BookMarkItem from '@/BookMark/components/BookMarkSection/BookMarkItem';

function DefaultBookMarkList() {
  return (
    <ul css={defaultBookMarksStyle}>
      {bookMarkContents.map((content) => (
        <li css={bookMarkWrapperStyle}>
          <BookMarkItem
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

export default DefaultBookMarkList;
