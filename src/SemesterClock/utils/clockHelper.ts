import { SemesterValue } from '@shared/services/api/types';
import {
  getDaysFromMs,
  getHoursFromMs,
  getMinutesFromMs,
  getNow,
  getSecondsFromMs,
} from '@shared/utils/timeHelper';
import { isAfter, isBefore } from 'date-fns';
import { ClockDigits, formatDigits } from '@shared/utils/formatHelper';

export type DurationKeys = 'days' | 'hours' | 'minutes' | 'seconds';

type ClockIntervals = { [key in DurationKeys]: ClockDigits };

export const getClockIntervals = (
  semester: SemesterValue,
  date: Date = getNow()
): ClockIntervals | 'expired' => {
  const semesterDueDate = new Date(semester.due);
  if (isBefore(semesterDueDate, date)) return 'expired';

  const intervalMs = +semesterDueDate - +date;

  return {
    days: formatDigits(getDaysFromMs(intervalMs)),
    hours: formatDigits(getHoursFromMs(intervalMs)),
    minutes: formatDigits(getMinutesFromMs(intervalMs)),
    seconds: formatDigits(getSecondsFromMs(intervalMs)),
  };
};

export const isClockUnexpired = (date: Date) => isBefore(getNow(), date);
export const isClockExpired = (date: Date) => isAfter(getNow(), date);
