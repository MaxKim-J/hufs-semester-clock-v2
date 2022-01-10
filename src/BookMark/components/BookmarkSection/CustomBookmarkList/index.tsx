import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import { useRecoilValue } from 'recoil';
import { userBookmarks } from '@/BookMark/atoms';
import bookmarkContents from '@shared/data/bookmarkContents';
import BookmarkItem from '@/BookMark/components/BookmarkSection/BookmarkItem';
import BookmarkCreateButton from '@/BookMark/components/BookmarkSection/CustomBookmarkList/BookmarkCreateButton';

function CustomBookmarkList() {
  const { status: userBookmarksStatus, value: userBookmarksValue } =
    useRecoilValue(userBookmarks);

  return (
    <ul css={customBookmarksStyle}>
      {userBookmarksStatus === 'initialized' ? (
        <>
          {userBookmarksValue !== null ? (
            <>
              <li css={bookMarkWrapperStyle}>
                <BookmarkCreateButton />
              </li>
              {userBookmarksValue.map((bookmark) => (
                <li css={bookMarkWrapperStyle}>
                  <BookmarkItem title={bookmark.title} url={bookmark.url} />
                </li>
              ))}
            </>
          ) : (
            <li css={bookMarkWrapperStyle}>
              <BookmarkCreateButton />
            </li>
          )}
        </>
      ) : null}
    </ul>
  );
}

const customBookmarksStyle = css`
  display: flex;
`;

const bookMarkWrapperStyle = css`
  margin: 0 ${spaceTable.size16};
`;

export default CustomBookmarkList;
