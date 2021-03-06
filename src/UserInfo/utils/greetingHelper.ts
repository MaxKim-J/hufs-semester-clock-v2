import { getNow } from '@shared/utils/timeHelper';
import { getRandomArrayIndex } from '@shared/utils/mathHelper';

export type Greetings = { id: number; message: string; emoji: string }[];

export const MORNING = [
  { id: 0, emoji: 'π', message: 'μ’μ μμΉ¨μ΄μμ!' },
  { id: 1, emoji: 'π', message: 'μΌλ¦¬λ²λ νμ΄ν!' },
  { id: 2, emoji: 'π', message: 'νλ³΅ν νλ£¨ λ³΄λ΄μΈμ!' },
  { id: 3, emoji: 'π', message: 'μ€λ νλ£¨λ λ³ ν μμ΄!' },
  { id: 4, emoji: 'π€', message: 'λ­κ° μμ΄λ²λ¦° κ±΄ μμΌμ κ°μ?' },
];

export const AFTERNOON = [
  { id: 0, emoji: 'π', message: 'λ°λΉ λ λ°₯μ κΌ­ μ±κ²¨λμΈμ!' },
  { id: 1, emoji: 'π', message: 'μ λλ μ€ν λμΈμ!' },
  { id: 2, emoji: 'β', message: 'μ»€νΌ ν μ μ΄λ μ κ°μ?' },
  { id: 3, emoji: 'π', message: 'λλ₯Έν μ€νμλ νλ΄μΈμ!' },
];

export const EVENING = [
  { id: 0, emoji: 'π', message: 'ν¬κ·Όν μ λμλλ€!' },
  { id: 1, emoji: 'β', message: 'μ κΉ μ¬μ΄κ°μλ κ±΄ μ΄λ¨κΉμ?' },
  { id: 2, emoji: 'π»', message: 'μ½μμ΄ μμΌμ κ°μ?' },
  { id: 3, emoji: 'π ', message: 'μ§μ κ°λ μ€μ΄μ κ°μ?' },
];

export const NIGHT = [
  { id: 0, emoji: 'π', message: 'νΈμν λ°€ λμΈμ!' },
  { id: 1, emoji: 'π', message: 'μ’μ νλ£¨ λ³΄λ΄μ¨λμ?' },
  { id: 2, emoji: 'π', message: 'μ€λλ μκ³ νμ¨μ΄μ!' },
  { id: 3, emoji: 'π', message: 'ν  μΌμ΄ λ¨μΌμ¨λμ?' },
];

export const DAWN = [
  { id: 0, emoji: 'β°', message: 'λ°€μ μμ λ€λ©΄.. νμ΄ν!' },
  { id: 1, emoji: 'π₯', message: 'κ³΅λΆ νλ΄μΈμ!' },
  { id: 2, emoji: 'π', message: 'λΈλ ₯νμ λ§νΌ μ λ κ±°μμ!' },
  { id: 3, emoji: 'π', message: 'μ  λͺ»λλ λ°€μΈκ°μ?' },
];

export const greetingMap = {
  '0-7': DAWN,
  '7-12': MORNING,
  '12-18': AFTERNOON,
  '18-21': EVENING,
  '21-24': NIGHT,
};

type GreetingMapKey = keyof typeof greetingMap;

export function getGreetingMessage(date?: Date) {
  const hour = (date ?? getNow()).getHours();

  let greetings: Greetings = [];

  Object.keys(greetingMap).forEach((range) => {
    const [from, to] = range.split('-');
    if (+from <= hour && hour < +to) {
      greetings = greetingMap[range as GreetingMapKey];
    }
  });

  return greetings[getRandomArrayIndex(greetings.length)];
}
