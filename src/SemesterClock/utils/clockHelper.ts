import { SemesterValue } from '@shared/services/api/types';
import {
  getHoursFromTimestamp,
  getDaysFromTimestamp,
  getMinutesFromTimestamp,
  getSecondsFromTimestamp,
  getNow,
} from '@shared/utils/timeHelper';
import { isAfter, isBefore } from 'date-fns';
import { ClockDigits, formatDigits } from '@shared/utils/formatHelper';

export type DurationKeys = 'days' | 'hours' | 'minutes' | 'seconds';

export type ClockIntervals = { [key in DurationKeys]: ClockDigits };

export const getClockIntervals = (
  semester: SemesterValue,
  date: Date = getNow()
): ClockIntervals | 'expired' => {
  const semesterDueDate = new Date(semester.due);
  if (isBefore(semesterDueDate, date)) return 'expired';

  const intervalMs = +semesterDueDate - +date;

  return {
    days: formatDigits(getDaysFromTimestamp(intervalMs)),
    hours: formatDigits(getHoursFromTimestamp(intervalMs)),
    minutes: formatDigits(getMinutesFromTimestamp(intervalMs)),
    seconds: formatDigits(getSecondsFromTimestamp(intervalMs)),
  };
};

export const isClockUnexpired = (date: Date) => isBefore(getNow(), date);
export const isClockExpired = (date: Date) => isAfter(getNow(), date);
