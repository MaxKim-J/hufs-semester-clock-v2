import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import { useRecoilState } from 'recoil';
import { m } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import BookmarkItem from '@/BookMark/components/BookmarkSection/BookmarkItem';
import BookmarkCreateButton from '@/BookMark/components/BookmarkSection/CustomBookmarkList/BookmarkCreateButton';
import { Bookmark, userBookmarks } from '@/BookMark/atoms';

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
    <m.article
      {...fadeInAndOut}
      aria-labelledby="custom-bookmark-list-heading"
      aria-describedby="custom-bookmark-list-describe"
    >
      <Heading
        tag="h2"
        id="custom-bookmark-list-heading"
        css={readableHiddenHeading}
      >
        사용자 설정 북마크 리스트
      </Heading>
      <p id="custom-bookmark-list-describe" css={readableHiddenHeading}>
        사용자 설정 북마크 리스트 맨 끝의 북마크 추가 버튼을 통해 북마크를
        추가할 수 있습니다.
      </p>
      <ul css={customBookmarksStyle}>
        {userBookmarksStatus === 'initialized' ? (
          <>
            {userBookmarksValue !== null &&
              userBookmarksValue.map((bookmark) => (
                <li css={bookMarkWrapperStyle} key={bookmark.id}>
                  <BookmarkItem
                    bookmark={bookmark}
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
    </m.article>
  );
}

const customBookmarksStyle = css`
  display: flex;
`;

const bookMarkWrapperStyle = css`
  margin: 0 ${spaceTable.size16};
`;

export default CustomBookmarkList;
