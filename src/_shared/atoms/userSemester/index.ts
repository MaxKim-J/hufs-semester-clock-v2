import { atom } from 'recoil';
import { SemesterValue } from '@shared/services/api/types';

export const currentSemester = atom<SemesterValue | null>({
  key: 'currentSemester',
  default: null,
});
