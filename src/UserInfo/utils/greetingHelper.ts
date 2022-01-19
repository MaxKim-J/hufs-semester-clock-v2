import { getNow } from '@shared/utils/timeHelper';
import { getRandomArrayIndex } from '@shared/utils/mathHelper';

export type Greetings = { id: number; message: string; emoji: string }[];

export const MORNING = [
  { id: 0, emoji: '🌄', message: '좋은 아침이에요!' },
  { id: 1, emoji: '🕘', message: '얼리버드 화이팅!' },
  { id: 2, emoji: '😎', message: '행복한 하루 보내세요!' },
  { id: 3, emoji: '🙏', message: '오늘 하루도 별 탈 없이!' },
  { id: 4, emoji: '🤔', message: '뭔가 잊어버린 건 없으신가요?' },
];

export const AFTERNOON = [
  { id: 0, emoji: '🍚', message: '바빠도 밥은 꼭 챙겨드세요!' },
  { id: 1, emoji: '🌞', message: '신나는 오후 되세요!' },
  { id: 2, emoji: '☕', message: '커피 한 잔 어떠신가요?' },
  { id: 3, emoji: '🔋', message: '나른한 오후에도 힘내세요!' },
];

export const EVENING = [
  { id: 0, emoji: '🌇', message: '포근한 저녁입니다!' },
  { id: 1, emoji: '⌛', message: '잠깐 쉬어가시는 건 어떨까요?' },
  { id: 2, emoji: '🍻', message: '약속이 있으신가요?' },
  { id: 3, emoji: '🏠', message: '집에 가는 중이신가요?' },
];

export const NIGHT = [
  { id: 0, emoji: '🌉', message: '편안한 밤 되세요!' },
  { id: 1, emoji: '🙂', message: '좋은 하루 보내셨나요?' },
  { id: 2, emoji: '👋', message: '오늘도 수고하셨어요!' },
  { id: 3, emoji: '📌', message: '할 일이 남으셨나요?' },
];

export const DAWN = [
  { id: 0, emoji: '⏰', message: '밤을 새신다면.. 화이팅!' },
  { id: 1, emoji: '🔥', message: '공부 힘내세요!' },
  { id: 2, emoji: '👍', message: '노력하신만큼 잘 될거에요!' },
  { id: 3, emoji: '🌃', message: '잠 못드는 밤인가요?' },
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
