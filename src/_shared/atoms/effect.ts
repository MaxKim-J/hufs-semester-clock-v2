import { AtomEffect } from 'recoil';
import {
  getChormeStorageItem,
  setChromeStorageItem,
  removeChromeStorageItem,
} from '@shared/services/storage/chromeStorage';
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from '@shared/services/storage/localStorage';
import { StorageAtom } from './types';

const chromeStorageEffect = <AtomDataType>(key: string) => {
  const effect: AtomEffect<StorageAtom<AtomDataType>> = ({
    setSelf,
    onSet,
  }) => {
    getChormeStorageItem<AtomDataType>(key).then(({ value }) => {
      setSelf({ status: 'initialized', value });
    });

    onSet(async (newValue) => {
      if (newValue.value === null) {
        await removeChromeStorageItem(key);
      } else {
        await setChromeStorageItem({ [key]: newValue.value });
      }
    });
  };

  return effect;
};

const localStorageEffect = <AtomDataType>(key: string) => {
  const effect: AtomEffect<StorageAtom<AtomDataType>> = ({
    setSelf,
    onSet,
  }) => {
    const { value } = getLocalStorageItem<AtomDataType>(key);
    setSelf({ status: 'initialized', value });

    onSet(async (newValue) => {
      if (newValue.value === null) {
        await removeLocalStorageItem(key);
      } else {
        await setLocalStorageItem(key, newValue.value);
      }
    });
  };

  return effect;
};

const storageEffect = process.env.IS_WEB
  ? localStorageEffect
  : chromeStorageEffect;

export default storageEffect;
