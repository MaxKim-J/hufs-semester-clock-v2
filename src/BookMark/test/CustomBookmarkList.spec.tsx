import { MutableSnapshot } from 'recoil';
import { fireEvent, render, screen } from '@testing-library/react';
import TestBoundary from '@components/boundries/TestBoundary';
import CustomBookmarkList from '@/BookMark/components/BookmarkSection/CustomBookmarkList';
import { userBookmarks } from '@/BookMark/atoms';

describe('유저는 북마크를 추가하거나 삭제할 수 있다.', () => {
  const initialBookmarks = [
    { id: 'njokd1objg', title: '네이버', url: 'https://naver.com' },
    { id: 'wdn8z4libx', title: '구글', url: 'https://google.com' },
  ];

  beforeEach(() => {
    const recoilState = ({ set }: MutableSnapshot) => {
      set(userBookmarks, {
        status: 'initialized',
        value: initialBookmarks,
      });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <CustomBookmarkList />
      </TestBoundary>
    );
  });

  it('브라우저에 북마크가 저장되어 있을 경우, 초기화면에 북마크를 표시한다.', () => {
    screen.getByText(/네이버/i);
    screen.getByText(/구글/i);
  });

  it('북마크 추가 버튼을 누르고 북마크 제목, url을 입력해 북마크를 추가할 수 있다.', async () => {
    const createButton = screen.getByText('즐겨찾기 추가');
    fireEvent.click(createButton);
    const titleInput = screen.getByTitle('북마크 제목 입력');
    const urlInput = screen.getByTitle('북마크 주소 입력');
    const submitButton = screen.getByText('입력하기');

    fireEvent.change(titleInput, { target: { value: '다음' } });
    fireEvent.change(urlInput, { target: { value: 'daum.net' } });
    fireEvent.click(submitButton);

    screen.getByText(/다음/i);
  });

  it('북마크 삭제 버튼을 눌러 북마크를 삭제할 수 있다', () => {
    const removeId = initialBookmarks.filter(
      (bookmark) => bookmark.title === '네이버'
    )[0].id;
    const removeButton = screen.getByTestId(`remove-${removeId}`);
    fireEvent.click(removeButton);
    expect(screen.queryByText(/네이버/i)).toBeNull();
  });
});
