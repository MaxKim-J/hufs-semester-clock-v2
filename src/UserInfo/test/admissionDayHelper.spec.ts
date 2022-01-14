import {
  getAdmissionByDate,
  getAdmissionInterval,
} from '@/UserInfo/utils/admissionDayHelper';

describe('Unit: getAdmissionInterval 함수는 현재 시간과 인자로 받은 입학년도와의 날짜 차이를 반환한다.', () => {
  it('인자로 주어진 입학 연도 인자가 과거일 경우 양수인 날짜 차이를 반환한다.', () => {
    expect(
      getAdmissionInterval('15', new Date('2021-11-21T23:59:59'))
    ).toBeGreaterThan(0);
  });
  it('인자로 주어진 입학 연도 인자가 미래일 경우 음수인 날짜 차이를 반환한다.', () => {
    expect(
      getAdmissionInterval('22', new Date('2021-11-21T23:59:59'))
    ).toBeLessThan(0);
  });
});

describe('Unit: getAdmissionByDate 함수는 현재 연도를 바탕으로 가장 최근 입학년도 문자열을 반환한다.', () => {
  it('인자로 주어진 날짜에 맞는 입학 연도 문자열을 반환한다.', () => {
    expect(getAdmissionByDate(new Date('2022-01-21T23:59:59'))).toBe('22');
  });
});
