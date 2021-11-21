import { Semester, SemesterValue } from '@/services/api/types';

export const otherProcess = (semester: Semester) =>
  Object.values(semester).map((v: SemesterValue) => v.due);

export const processSemester = (semester: Semester) =>
  Object.values(semester).map((v: SemesterValue) => v.act);
