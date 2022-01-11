import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import { useRecoilState } from 'recoil';
import { Bookmark, userBookmarks } from '@/BookMark/atoms';
import BookmarkItem from '@/BookMark/components/BookmarkSection/BookmarkItem';
import BookmarkCreateButton from '@/BookMark/components/BookmarkSection/CustomBookmarkList/BookmarkCreateButton';

function CustomBookmarkList() {
  const [
    { status: userBookmarksStatus, value: userBookmarksValue },
    setUserBookmarks,
  ] = useRecoilState(userBookmarks);

  const removeBookmark = (id: string) => {
    setUserBookmarks((state) => ({
      ...state,
      value: (state.value as Bookmark[]).filter(
        (bookmark) => bookmark.id !== id
      ),
    }));
  };

  return (
    <ul css={customBookmarksStyle}>
      {userBookmarksStatus === 'initialized' ? (
        <>
          {userBookmarksValue !== null &&
            userBookmarksValue.map((bookmark) => (
              <li css={bookMarkWrapperStyle} key={bookmark.id}>
                <BookmarkItem
                  title={bookmark.title}
                  url={bookmark.url}
                  onClickClose={() => {
                    removeBookmark(bookmark.id);
                  }}
                />
              </li>
            ))}
          {userBookmarksValue !== null && userBookmarksValue.length < 5 && (
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
