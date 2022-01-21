import { Weather } from '@shared/services/api/types';
import {
  convertWeatherEmoji,
  getCampusWeather,
} from '@/Weather/utils/weatherHelper';

describe('UNIT: convertWeatherEmoji 함수는 weatherId에 적합한 이모지와 날씨 설명을 반환한다.', () => {
  it('weatherId가 2,3,5,6으로 시작하는 숫자일 경우, 눈/비 이모지중 하나를 리턴한다.', () => {
    expect(convertWeatherEmoji(200)).toEqual({ value: '🌩', label: '뇌우' });
    expect(convertWeatherEmoji(201)).toEqual({ value: '🌩', label: '뇌우' });
    expect(convertWeatherEmoji(301)).toEqual({
      value: '🌦',
      label: '이슬비, 흐린뒤 갬',
    });
    expect(convertWeatherEmoji(501)).toEqual({ value: '🌧', label: '비 내림' });
    expect(convertWeatherEmoji(601)).toEqual({ value: '🌨', label: '눈 내림' });
    expect(convertWeatherEmoji(699)).toEqual({ value: '🌨', label: '눈 내림' });
  });

  it('weatherId가 7,8로 시작하는 숫자일 경우, 맑음/흐림/안개/미세먼지/태풍 이모지 중 하나를 리턴한다.', () => {
    expect(convertWeatherEmoji(800)).toEqual({ value: '☀️', label: '맑음' });
    expect(convertWeatherEmoji(802)).toEqual({
      value: '⛅️',
      label: '약간 흐림',
    });
    expect(convertWeatherEmoji(804)).toEqual({ value: '☁️', label: '흐림' });
    expect(convertWeatherEmoji(701)).toEqual({
      value: '🌫',
      label: '얕은 안개',
    });
    expect(convertWeatherEmoji(731)).toEqual({
      value: '😷',
      label: '미세먼지와 황사',
    });
    expect(convertWeatherEmoji(781)).toEqual({ value: '🌪', label: '태풍' });
  });

  it('weatherId가 2,3,5,6,7,8외에 weatherEmojiTable에 존재하지 않는 id일 경우, 맑음 이모지를 리턴한다.', () => {
    expect(convertWeatherEmoji(923)).toEqual({ value: '☀️', label: '맑음' });
    expect(convertWeatherEmoji(123)).toEqual({ value: '☀️', label: '맑음' });
    expect(convertWeatherEmoji(805)).toEqual({ value: '☀️', label: '맑음' });
  });
});

describe('UNIT: getCampusWeather 함수는 Weather 배열을 캠퍼스(서울/글로벌) 기준으로 분류한다.', () => {
  it('Weather 배열에 seoul/global 캠퍼스 날씨가 모두 들어있는 경우, 각 캠퍼스에 해당하는 weather을 배열에 넣어 객체로 리턴한다.', () => {
    const given: Weather[] = [
      {
        id: 0,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 800,
      },
      {
        id: 1,
        date: '01/21',
        reginal: 'global',
        temp: '-11/2',
        weatherId: 723,
      },
      {
        id: 2,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 616,
      },
    ];

    const when = getCampusWeather(given);

    expect(when.seoul).toEqual([
      {
        id: 0,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 800,
      },
      {
        id: 2,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 616,
      },
    ]);

    expect(when.global).toEqual([
      {
        id: 1,
        date: '01/21',
        reginal: 'global',
        temp: '-11/2',
        weatherId: 723,
      },
    ]);
  });

  it('Weather 배열에 seoul 캠퍼스 날씨만 들어있는 경우, global 배열은 빈 배열로 리턴한다.', () => {
    const given: Weather[] = [
      {
        id: 0,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 800,
      },
      {
        id: 2,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 616,
      },
    ];

    const when = getCampusWeather(given);

    expect(when.global).toEqual([]);
    expect(when.seoul).toEqual([
      {
        id: 0,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 800,
      },
      {
        id: 2,
        date: '01/21',
        reginal: 'seoul',
        temp: '-11/2',
        weatherId: 616,
      },
    ]);
  });

  it('Weather 배열에 global 캠퍼스 날씨만 들어있는 경우, seoul 배열은 빈 배열로 리턴한다.', () => {
    const given: Weather[] = [
      {
        id: 0,
        date: '01/21',
        reginal: 'global',
        temp: '-11/2',
        weatherId: 800,
      },
      {
        id: 2,
        date: '01/21',
        reginal: 'global',
        temp: '-11/2',
        weatherId: 616,
      },
    ];

    const when = getCampusWeather(given);

    expect(when.seoul).toEqual([]);
    expect(when.global).toEqual([
      {
        id: 0,
        date: '01/21',
        reginal: 'global',
        temp: '-11/2',
        weatherId: 800,
      },
      {
        id: 2,
        date: '01/21',
        reginal: 'global',
        temp: '-11/2',
        weatherId: 616,
      },
    ]);
  });
});
