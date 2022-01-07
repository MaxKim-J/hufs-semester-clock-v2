import format from 'date-fns/format';

export const formatDate = (date: Date) => format(date, 'yyyy.MM.dd');

export const formatNumber = (num: number) => num.toLocaleString();
