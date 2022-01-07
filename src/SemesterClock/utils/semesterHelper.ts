import isBefore from 'date-fns/isBefore';
import {
  Semesters,
  SemesterValue,
  SemesterType,
} from '@shared/services/api/types';
import { getNow } from '@shared/utils/timeHelper';

export const getCurrentSemester = (
  semesters: Semesters,
  date: Date = getNow()
): SemesterValue => {
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

  return semesters.current;
};
