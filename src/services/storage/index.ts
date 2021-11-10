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
      operation: 'get',
      result: 'fail',
      error: error.message ?? 'unknown error',
    }));

  static setItem = async (
    obj: Record<string, any>
  ): Promise<StorageClientResult> => {
    try {
      await chrome.storage.local.set(obj);
      return { operation: 'set', result: 'success', value: obj };
    } catch (error: any) {
      return {
        operation: 'set',
        result: 'fail',
        error: error.message ?? 'unknown error',
      };
    }
  };

  static removeItem = async (key: string): Promise<StorageClientResult> => {
    try {
      await chrome.storage.local.remove(key);
      return { operation: 'remove', result: 'success' };
    } catch (error: any) {
      return {
        operation: 'remove',
        result: 'fail',
        error: error.message ?? 'unknown error',
      };
    }
  };
}

export default StorageClient;
