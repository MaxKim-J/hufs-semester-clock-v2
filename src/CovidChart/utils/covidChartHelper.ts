import { formatDigits } from '@shared/utils/formatHelper';

export const formatCovidDay = (text: string) => {
  const [month, day] = text.split('.');
  return `${formatDigits(+month)}월 ${day}일`;
};
