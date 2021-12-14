import { AtomEffect } from 'recoil';
import { getItem, removeItem, setItem } from '@/_shared/services/storage';
import { StorageAtom } from './types';

export const chromeStorageEffect = <AtomDataType>(key: string) => {
  const effect: AtomEffect<StorageAtom<AtomDataType>> = ({
    setSelf,
    onSet,
  }) => {
    getItem<AtomDataType>(key).then(({ result, value }) => {
      if (result === 'success' && value !== undefined) {
        setSelf({ status: 'initialized', value });
      } else {
        setSelf({ status: 'initialized', value: null });
      }
    });

    onSet(async (newValue) => {
      if (newValue.value === null) {
        await removeItem(key);
      } else {
        await setItem({ [key]: newValue.value });
      }
    });
  };

  return effect;
};
