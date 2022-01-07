import { SemesterValue } from '@shared/services/api/types';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';

export type DurationKeys = 'days' | 'hours' | 'minutes' | 'seconds';
type ClockInterval = `0${number}` | `${number}`;
type ClockIntervals = { [key in DurationKeys]: ClockInterval };

export const getClockIntervals = (
  semester: SemesterValue,
  date: Date = getNow()
): ClockIntervals | null => {
  const semesterDueDate = new Date(semester.due);
  if (isClockExpired(semesterDueDate)) return null;

  const intervalMs = +semesterDueDate - +date;

  // TODO : 이런 로직을 반복 줄여서 보기좋게 작성하는 방법이 더 없을까?
  return {
    days: getClockDigits(Math.floor(intervalMs / (1000 * 60 * 60 * 24))),
    hours: getClockDigits(Math.floor((intervalMs / (1000 * 60 * 60)) % 24)),
    minutes: getClockDigits(Math.floor((intervalMs / (1000 * 60)) % 60)),
    seconds: getClockDigits(Math.floor((intervalMs / 1000) % 60)),
  };
};

const getClockDigits = (num: number): ClockInterval =>
  num < 10 ? `0${num}` : `${num}`;

export const getNow = () => new Date();

export const isClockUnexpired = (date: Date) => isBefore(getNow(), date);
export const isClockExpired = (date: Date) => isAfter(getNow(), date);
