import { MutableSnapshot } from 'recoil';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import TestBoundary from '@components/boundries/TestBoundary';
import CustomBookmarkList from '@/BookMark/components/BookmarkSection/CustomBookmarkList';
import { userBookmarks } from '@/BookMark/atoms';

describe('USER INTERACTION: 유저는 북마크를 추가하거나 삭제할 수 있다.', () => {
  describe('북마크 수정, 삭제', () => {
    const initialBookmarks = [
      { id: 'njokd1objg', title: '네이버', url: 'https://naver.com' },
      { id: 'wdn8z4libx', title: '구글', url: 'https://google.com' },
    ];

    beforeAll(() => {
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

    afterAll(() => {
      cleanup();
    });

    it('브라우저에 북마크가 저장되어 있을 경우, 초기화면에 북마크를 표시한다.', () => {
      expect(screen.queryByText(/네이버/i)).toBeInTheDocument();
      expect(screen.queryByText(/구글/i)).toBeInTheDocument();
    });

    it('북마크 추가 버튼을 누르고 북마크 제목, url을 입력해 북마크를 추가할 수 있다.', async () => {
      const createButton = screen.getByText('북마크 추가');
      fireEvent.click(createButton);
      const titleInput = screen.getByTitle('북마크 제목 입력');
      const urlInput = screen.getByTitle('북마크 주소 입력');
      const submitButton = screen.getByText('입력');

      fireEvent.change(titleInput, { target: { value: '다음' } });
      fireEvent.change(urlInput, { target: { value: 'daum.net' } });
      fireEvent.click(submitButton);

      const newBookmarkElement = screen.queryByText(/다음/i);
      expect(newBookmarkElement).toBeInTheDocument();
    });

    it('북마크 삭제 버튼을 눌러 북마크를 삭제할 수 있다', () => {
      const removeId = initialBookmarks.filter(
        (bookmark) => bookmark.title === '네이버'
      )[0].id;
      const removeButton = screen.getByTestId(`remove-bookmark-${removeId}`);
      fireEvent.click(removeButton);
      expect(screen.queryByText(/네이버/i)).not.toBeInTheDocument();
    });
  });

  describe('북마크 추가 버튼 표시', () => {
    afterEach(() => {
      cleanup();
    });

    it('브라우저에 북마크가 저장되어 있지 않을 경우, 북마크 추가 버튼을 표시한다.', () => {
      const recoilState = ({ set }: MutableSnapshot) => {
        set(userBookmarks, {
          status: 'initialized',
          value: [],
        });
      };

      render(
        <TestBoundary recoilState={recoilState}>
          <CustomBookmarkList />
        </TestBoundary>
      );

      const addBookmarkButton = screen.queryByText('북마크 추가');
      expect(addBookmarkButton).toBeInTheDocument();
    });

    it('브라우저에 북마크가 5개 이상 저장되어 있을 경우, 북마크 추가 버튼을 표시하지 않는다.', async () => {
      const recoilState = ({ set }: MutableSnapshot) => {
        set(userBookmarks, {
          status: 'initialized',
          value: [
            { id: 'njokd1objg', title: '네이버1', url: 'https://naver.com' },
            { id: 'wdn8z42ibx', title: '구글2', url: 'https://google.com' },
            { id: 'wdn8z44ib1', title: '구글3', url: 'https://google.com' },
            { id: 'wdn8z46ib3', title: '구글4', url: 'https://google.com' },
            { id: 'wdn8z46ib4', title: '구글5', url: 'https://google.com' },
          ],
        });
      };

      render(
        <TestBoundary recoilState={recoilState}>
          <CustomBookmarkList />
        </TestBoundary>
      );

      const addBookmarkButton = screen.queryByText('북마크 추가');
      expect(addBookmarkButton).not.toBeInTheDocument();
    });
  });
});
