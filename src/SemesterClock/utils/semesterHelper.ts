import {
  Semesters,
  SemesterValue,
  SemesterType,
} from '@shared/services/api/types';
import { isBefore } from 'date-fns';
import { getNow } from '@/SemesterClock/utils/clockHelper';

export const getCurrentSemester = (
  semesters: Semesters,
  date: Date = getNow()
): SemesterValue | null => {
  const sortedSemesters = Object.entries(semesters)
    .map(([key, value]) => ({
      key,
      due: new Date(value.due),
    }))
    .filter((semester) => semester.key !== 'seasonal')
    .sort((prev, next) => +prev.due - +next.due);

  for (let i = 0; i < sortedSemesters.length; i += 1) {
    if (!isBefore(sortedSemesters[i].due, date)) {
      return semesters[sortedSemesters[i].key as SemesterType];
    }
  }

  return null;
};
