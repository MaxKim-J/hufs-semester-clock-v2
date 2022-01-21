import { SemesterValue } from '@shared/services/api/types';
import { getClockIntervals } from '@/SemesterClock/utils/clockHelper';

describe('UNIT: getClockIntervals 함수는 인자로 기준 학기 정보와 시간을 받아 두 시간의 차이를 반환한다.', () => {
  it('프로퍼티 숫자가 10 이하인 경우 0을 붙여 두 자리 수 문자열을 반환한다.', () => {
    const semester: SemesterValue = {
      id: 'current',
      act: '종강',
      due: '2022-01-07T11:59:59',
      title: '2022-1학기',
    };

    const date = new Date('2022-01-04T10:58:58');
    const intervals = getClockIntervals(semester, date);
    expect(intervals).toEqual({
      days: '03',
      hours: '01',
      minutes: '01',
      seconds: '01',
    });
  });

  it('기준 시간보다 미래의 시간이 주어졌을 때 두 시간의 일,시간,분,초 차이를 수 문자열로 반환한다.', () => {
    const semester: SemesterValue = {
      id: 'current',
      act: '종강',
      due: '2022-06-22T11:59:59',
      title: '2022-1학기',
    };

    const date = new Date('2022-01-04T11:59:59');
    const intervals = getClockIntervals(semester, date);
    expect(intervals).toEqual({
      days: '169',
      hours: '00',
      minutes: '00',
      seconds: '00',
    });
  });

  it('기준 시간보다 과거의 시간이 인자로 주어졌을 경우 expired 문자열을 반환한다.', () => {
    const semester: SemesterValue = {
      id: 'current',
      act: '종강',
      due: '2022-01-01T11:59:59',
      title: '2022-1학기',
    };

    const date = new Date('2022-01-04T10:58:58');
    const intervals = getClockIntervals(semester, date);
    expect(intervals).toBe('expired');
  });
});
