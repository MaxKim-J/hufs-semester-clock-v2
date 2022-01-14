import { getRandomString } from '@shared/utils/mathHelper';
import { Bookmark } from '@/BookMark/atoms';

export const getNewBookmarks = (title: string, url: string): [Bookmark] => [
  {
    id: getRandomString(),
    title,
    url: addProtocol(url),
  },
];

const addProtocol = (url: string) =>
  /^http/.test(url) ? url : `https://${url}`;
