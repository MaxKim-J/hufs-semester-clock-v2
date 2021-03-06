import {
  interpolateX,
  interpolateY,
} from '@/CovidChart/utils/interpolateHelper';

describe('UNIT: interpolate 함수는 주어진 width, height, margin값을 토대로 꺾은선 그래프 데이터의 SVG상 위치를 반환한다.', () => {
  const irregularGiven = [123, 182, 185, 223, 252, 272];
  const regularGiven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 편의상 정렬된 배열 사용

  describe('interpolateX 함수는 마진값을 제외하고 꺾은선 그래프의 점들이 같은 간격을 유지한 상태로 위치할 수 있는 X좌표들을 반환한다.', () => {
    const when1 = interpolateX({
      nums: irregularGiven,
      width: 200,
      xMargin: 20,
    });

    const when2 = interpolateX({
      nums: regularGiven,
      width: 466,
      xMargin: 42,
    });

    it('interpolateX 함수의 첫 요소는 마진값과 같다.', () => {
      expect(when1[0]).toEqual(20);
      expect(when2[0]).toEqual(42);
    });

    it('interpolateX 함수 반환값 요소들의 간격은 일정하다.', () => {
      for (let i = 1; i < irregularGiven.length; i += 1) {
        expect(when1[i] - when1[i - 1]).toBe(32);
      }

      for (let j = 1; j < irregularGiven.length; j += 1) {
        expect(when2[j] - when2[j - 1]).toBe(42);
      }
    });
  });

  describe('interpolateY 함수는 그래프의 데이터의 높고 낮음을 height와 yMargin값에 따라 상대적으로 변환한 Y좌표들을 반환한다.', () => {
    const when1Height = 552;
    const when1yMargin = 20;
    const when1 = interpolateY({
      nums: irregularGiven,
      height: when1Height,
      yMargin: when1yMargin,
    });

    const when2Height = 466;
    const when2yMargin = 18;
    const when2 = interpolateY({
      nums: regularGiven,
      height: when2Height,
      yMargin: when2yMargin,
    });

    it('interpolateY 함수 반환값에서 nums 배열의 최소값은 height에서 margin을 뺀 값과 같다.', () => {
      expect(when1[0]).toEqual(when1Height - when1yMargin);
      expect(when2[0]).toEqual(when2Height - when2yMargin);
    });

    it('interpolateY 함수 반환값에서 nums 배열의 최대값은 margin값과 같다.', () => {
      expect(when1[when1.length - 1]).toEqual(when1yMargin);
      expect(when2[when2.length - 1]).toEqual(when2yMargin);
    });

    it('interpolateY 함수 반환값의 모든 요소는 margin값보다 크거나 같고, height-margin값보다는 같거나 작다.', () => {
      expect(
        when1.every((v) => v >= when1yMargin && v <= when1Height - when1yMargin)
      ).toBe(true);
      expect(
        when2.every((v) => v >= when2yMargin && v <= when2Height - when2yMargin)
      ).toBe(true);
    });
  });
});
