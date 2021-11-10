type StorageAtomStatus = 'loading' | 'initialized' | 'idle';

export type StorageAtom<AtomDataType> = {
  status: StorageAtomStatus;
  value: AtomDataType | null;
};
