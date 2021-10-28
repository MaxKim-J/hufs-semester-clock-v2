type StorageOperation = 'get' | 'set' | 'remove' | 'clear';

type StorageClientSuccessResult = {
  operation: StorageOperation;
  result: 'success';
  value: Record<string, any> | string;
};

type StorageClientFailResult = {
  operation: StorageOperation;
  result: 'fail';
  error?: string;
};

export type StorageClientResult =
  | StorageClientSuccessResult
  | StorageClientFailResult;
