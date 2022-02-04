import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import storageEffect from '@shared/atoms/effect';

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export const userBookmarks = atom<StorageAtom<Bookmark[]>>({
  key: 'userBookmarks',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [storageEffect<Bookmark[]>('userBookmarks')],
});
