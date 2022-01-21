import {
  getDaysFromTimestamp,
  getHoursFromTimestamp,
  getMinutesFromTimestamp,
  getSecondsFromTimestamp,
} from '@shared/utils/timeHelper';

describe('UNIT: get~fromTimestamp 함수들은 UNIX Timestamp를 각각 정수인 일, 시간, 분, 초로 변환한다.', () => {
  const given1 =
    +new Date('2022-01-22T11:00:00') - +new Date('2022-01-20T09:00:00');
  const given2 =
    +new Date('2022-12-19T13:59:47') - +new Date('2022-01-20T15:21:39');

  it('getDaysFromTimestamp 함수는 timestamp를 일(days)로 반환한다.', () => {
    expect(getDaysFromTimestamp(given1)).toBe(2);
    expect(getDaysFromTimestamp(given2)).toBe(332);
  });

  it('getHoursFromTimestamp 함수는 timestamp를 시간(hours)로 반환한다.', () => {
    expect(getHoursFromTimestamp(given1)).toBe(2);
    expect(getHoursFromTimestamp(given2)).toBe(22);
  });

  it('getHoursFromTimestamp 함수는 timestamp를 분(minutes)으로 반환한다.', () => {
    expect(getMinutesFromTimestamp(given1)).toBe(0);
    expect(getMinutesFromTimestamp(given2)).toBe(38);
  });

  it('getHoursFromTimestamp 함수는 timestamp를 초(seconds)으로 반환한다.', () => {
    expect(getSecondsFromTimestamp(given1)).toBe(0);
    expect(getSecondsFromTimestamp(given2)).toBe(8);
  });
});
