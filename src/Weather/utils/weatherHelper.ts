import { Campus, CampusWeather, Weather } from '@shared/services/api/types';

type WeatherEmoji = { value: string; label: string };

const rangeWeatherEmojiTable: Record<string, WeatherEmoji> = {
  '2': { value: '🌩', label: '뇌우' },
  '3': { value: '🌦', label: '이슬비, 흐린뒤 갬' },
  '5': { value: '🌧', label: '비 내림' },
  '6': { value: '🌨', label: '눈 내림' },
};

const exactWeatherEmojiTable: Record<string, WeatherEmoji> = {
  '800': { value: '☀️', label: '맑음' },
  '801': { value: '☀️', label: '맑음' },
  '802': { value: '⛅️', label: '약간 흐림' },
  '803': { value: '⛅️', label: '약간 흐림' },
  '804': { value: '☁️', label: '흐림' },
  '701': { value: '🌫', label: '안개' },
  '721': { value: '🌫', label: '안개' },
  '741': { value: '🌫', label: '안개' },
  '731': { value: '😷', label: '미세먼지 심함' },
  '761': { value: '😷', label: '미세먼지 심함' },
  '781': { value: '🌪', label: '태풍' },
};

export const convertWeatherEmoji = (weatherId: number): WeatherEmoji => {
  const id = String(weatherId);
  return (
    rangeWeatherEmojiTable[id[0]] ??
    exactWeatherEmojiTable[id] ??
    exactWeatherEmojiTable['800']
  );
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

export const convertWeatherTemp = (temperature: string) => {
  const sp = temperature.split('/');
  return [`최저:${sp[0]}`, `최고:${sp[1]}`];
};
