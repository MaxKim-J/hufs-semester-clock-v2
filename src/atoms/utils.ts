import { AtomEffect } from 'recoil';
import StorageClient from '@/services/storage';
import { StorageAtom } from './types';

export const chromeStorageEffect = <AtomDataType>(key: string) => {
  const effect: AtomEffect<StorageAtom<AtomDataType>> = ({
    setSelf,
    onSet,
  }) => {
    console.log('effect');
    StorageClient.getItem<AtomDataType>(key).then(({ result, value }) => {
      if (result === 'success' && value !== undefined) {
        setSelf({ status: 'initialized', value });
      } else {
        setSelf({ status: 'initialized', value: null });
      }
    });

    onSet(async (newValue) => {
      if (newValue === null) {
        await StorageClient.removeItem(key);
      } else {
        await StorageClient.setItem(newValue);
      }
    });
  };

  return effect;
};

export const a = () => {};
