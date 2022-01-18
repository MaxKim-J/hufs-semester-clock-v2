import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import { userBookmarks } from '@/BookMark/atoms';
import BookmarkItem from '@/BookMark/components/BookmarkSection/BookmarkItem';
import BookmarkCreateButton from '@/BookMark/components/BookmarkSection/CustomBookmarkList/BookmarkCreateButton';
import useRemoveBookmark from '@/BookMark/hooks/useRemoveBookmark';

function CustomBookmarkList() {
  const { status: userBookmarksStatus, value: userBookmarksValue } =
    useRecoilValue(userBookmarks);

  const removeBookmark = useRemoveBookmark();

  return (
    <motion.article {...fadeInAndOut}>
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
    </motion.article>
  );
}

const customBookmarksStyle = css`
  display: flex;
`;

const bookMarkWrapperStyle = css`
  margin: 0 ${spaceTable.size16};
`;

export default CustomBookmarkList;
