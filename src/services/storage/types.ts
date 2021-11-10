type StorageOperation = 'get' | 'set' | 'remove' | 'clear';
type StorageResult = 'success' | 'fail';

export type StorageClientResult = {
  operation: StorageOperation;
  result: StorageResult;
  error?: string;
};

export type StorageClientGetItemResult<ValueType> = {
  value?: ValueType | null;
} & StorageClientResult;
