import { useSetRecoilState } from 'recoil';
import { Bookmark, userBookmarks } from '@/BookMark/atoms';

const useRemoveBookmark = () => {
  const setUserBookmarks = useSetRecoilState(userBookmarks);

  return (id: string) => {
    setUserBookmarks((state) => ({
      ...state,
      value: (state.value as Bookmark[]).filter(
        (bookmark) => bookmark.id !== id
      ),
    }));
  };
};

export default useRemoveBookmark;
