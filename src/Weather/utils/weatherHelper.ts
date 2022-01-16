import { Campus, CampusWeather, Weather } from '@shared/services/api/types';

const rangeWeatherEmojiTable: Record<string, string> = {
  '2': '🌩',
  '3': '🌦',
  '5': '🌧',
  '6': '🌨',
};

const exactWeatherEmojiTable: Record<string, string> = {
  '800': '☀️',
  '801': '☀️',
  '802': '⛅️',
  '803': '🌥',
  '804': '☁️',
  '701': '🌫',
  '721': '🌫',
  '741': '🌫',
  '731': '😷',
  '761': '😷',
  '781': '🌪',
};

export const convertWeatherEmoji = (weatherId: number) => {
  const id = String(weatherId);
  return rangeWeatherEmojiTable[id[0]] ?? exactWeatherEmojiTable[id] ?? '☀️';
};

export const getCampusWeather = (weathers: Weather[]) =>
  weathers.reduce(
    (acc: CampusWeather, cur) =>
      cur.reginal === 'seoul'
        ? { ...acc, seoul: acc.seoul.concat(cur) }
        : { ...acc, global: acc.global.concat(cur) },
    { seoul: [], global: [] }
  );

export const translateCampusText = (campus: Campus) =>
  campus === 'seoul'
    ? '서울 캠퍼스(서울시 동대문구)'
    : '글로벌 캠퍼스(용인시 모현읍)';
