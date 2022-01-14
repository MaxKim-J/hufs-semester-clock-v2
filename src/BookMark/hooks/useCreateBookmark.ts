import { useSetRecoilState } from 'recoil';
import { getNewBookmarks } from '@/BookMark/utils/bookmarkHelper';
import { userBookmarks } from '@/BookMark/atoms';

const useCreateBookmark = () => {
  const setUserBookmarks = useSetRecoilState(userBookmarks);

  return (title: string, url: string) => {
    const newBookMark = getNewBookmarks(title, url);
    setUserBookmarks((state) => ({
      ...state,
      value:
        state.value === null ? newBookMark : state.value.concat(newBookMark),
    }));
  };
};

export default useCreateBookmark;
