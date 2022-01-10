import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import { chromeStorageEffect } from '@shared/atoms/utils';

export type Bookmark = {
  id: string;
  title: string;
  url: string;
};

export const userBookmarks = atom<StorageAtom<Bookmark[]>>({
  key: 'userBookmarks',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [chromeStorageEffect<Bookmark[]>('userBookmarks')],
});
