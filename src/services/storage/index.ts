/* eslint-disable no-undef */
import { StorageClientResult } from './types';

class StorageClient {
  static getItem = (key: string): Promise<StorageClientResult> =>
    new Promise<StorageClientResult>((resolve, reject) => {
      chrome.storage.local.get(key, (result) => {
        if (Object.keys(result).length === 0) {
          reject(new Error(`${key}에 해당하는 값이 스토리지에 없습니다.`));
        } else {
          resolve({ operation: 'get', result: 'success', value: result });
        }
      });
    }).catch((error) => ({
      operation: 'set',
      result: 'fail',
      error: error.message,
    }));

  static setItem = (obj: Record<string, any>): StorageClientResult => {
    try {
      chrome.storage.local.set(obj);
      return { operation: 'set', result: 'success', value: obj };
    } catch (error) {
      console.log(error);
      return { operation: 'set', result: 'fail' };
    }
  };

  static removeItem = (key: string): StorageClientResult => {
    try {
      chrome.storage.local.remove(key);
      return { operation: 'remove', result: 'success', value: key };
    } catch (error) {
      console.log(error);
      return { operation: 'remove', result: 'fail' };
    }
  };
}

export default StorageClient;
