import format from 'date-fns/format';

export const formatDate = (date: Date) => format(date, 'yyyy.MM.dd');

export const formatNumber = (num: number) => num.toLocaleString();

export type ClockDigits = `0${number}` | `${number}`;
export const formatDigits = (num: number): ClockDigits =>
  num < 10 ? `0${num}` : `${num}`;

export const formatEllipsis = (str: string, limit: number) =>
  str.length > limit ? `${str.slice(0, limit)}...` : str;
