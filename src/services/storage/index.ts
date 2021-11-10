/* eslint-disable no-undef */
import { StorageClientGetItemResult, StorageClientResult } from './types';

class StorageClient {
  static getItem = <ValueType>(
    key: string
  ): Promise<StorageClientGetItemResult<ValueType>> =>
    new Promise<StorageClientGetItemResult<ValueType>>((resolve, reject) => {
      chrome.storage.local.get([key], (result) => {
        if (result[key] === undefined) {
          reject(new Error(`${key}에 해당하는 값이 스토리지에 없습니다.`));
        } else {
          resolve({
            operation: 'get',
            result: 'success',
            value: result[key] as ValueType,
          });
        }
      });
    }).catch((error) => ({
      operation: 'get',
      result: 'fail',
      value: null,
      error: error.message ?? 'unknown error',
    }));

  static setItem = async (
    obj: Record<string, any>
  ): Promise<StorageClientResult> => {
    try {
      await chrome.storage.local.set(obj);
      return { operation: 'set', result: 'success' };
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
