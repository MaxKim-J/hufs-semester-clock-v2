import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import BookmarkItem from '@/BookMark/components/BookmarkSection/BookmarkItem';
import { Bookmark } from '@/BookMark/atoms';
import { useRef } from 'react';
import useContentFocusable from '@shared/hooks/useContentFocusable';

const bookmarkContents: Bookmark[] = [
  {
    id: 'hufs-homepage',
    title: '외대 홈페이지',
    url: 'https://www.hufs.ac.kr/',
    emoji: '🎓',
  },
  {
    id: 'e-class',
    title: 'e-class',
    url: 'https://eclass.hufs.ac.kr/',
    emoji: '📋',
  },
  {
    id: 'hufs-library',
    title: '외대 도서관',
    url: 'https://library.hufs.ac.kr',
    emoji: '📖',
  },
  {
    id: 'info-system',
    title: '종합정보시스템',
    url: 'https://wis.hufs.ac.kr/',
    emoji: 'ℹ️',
  },
  {
    id: 'cafeteria',
    title: '학식 메뉴',
    url: 'https://wis.hufs.ac.kr/jsp/HUFS/cafeteria/frame_view.jsp',
    emoji: '🍳',
  },
];

function DefaultBookmarkList() {
  const defaultBookmarkRef = useRef<HTMLElement>(null);

  useContentFocusable({
    searchRef: defaultBookmarkRef,
    focusableIndex: 0,
  });

  return (
    <article
      aria-labelledby="default-bookmark-heading"
      ref={defaultBookmarkRef}
    >
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
