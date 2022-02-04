import {
  StorageClientGetItemResult,
  StorageClientResult,
} from '@shared/services/storage/types';

export const getLocalStorageItem = <ItemType>(
  key: string
): StorageClientGetItemResult<ItemType> => {
  const item = window.localStorage.getItem(key);
  if (item === null) {
    return {
      operation: 'get',
      result: 'fail',
      value: null,
    };
  }
  return {
    operation: 'get',
    result: 'success',
    value: JSON.parse(item) as ItemType,
  };
};

export const setLocalStorageItem = (
  key: string,
  obj: Record<string, any>
): StorageClientResult => {
  try {
    window.localStorage.setItem(key, JSON.stringify(obj));
    return { operation: 'set', result: 'success' };
  } catch (error: any) {
    return {
      operation: 'set',
      result: 'fail',
      error: error.message ?? 'unknown error',
    };
  }
};

export const removeLocalStorageItem = (key: string): StorageClientResult => {
  // 없애벌임
  try {
    window.localStorage.removeItem(key);
    return { operation: 'remove', result: 'success' };
  } catch (error: any) {
    return {
      operation: 'remove',
      result: 'fail',
      error: error.message ?? 'unknown error',
    };
  }
};
