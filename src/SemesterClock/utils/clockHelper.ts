import { SemesterValue } from '@shared/services/api/types';
import { getNow } from '@shared/utils/timeHelper';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
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

  // TODO : 이런 로직을 반복 줄여서 보기좋게 작성하는 방법이 더 없을까?
  return {
    days: formatDigits(Math.floor(intervalMs / (1000 * 60 * 60 * 24))),
    hours: formatDigits(Math.floor((intervalMs / (1000 * 60 * 60)) % 24)),
    minutes: formatDigits(Math.floor((intervalMs / (1000 * 60)) % 60)),
    seconds: formatDigits(Math.floor((intervalMs / 1000) % 60)),
  };
};

export const isClockUnexpired = (date: Date) => isBefore(getNow(), date);
export const isClockExpired = (date: Date) => isAfter(getNow(), date);
