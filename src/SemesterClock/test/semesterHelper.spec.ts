import { Semesters } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

describe('getCurrentSemester 함수는 특정 시간에 해당하는 semester due date을 반환한다.', () => {
  const semesters: Semesters = {
    current: {
      act: '종강',
      due: '2021-11-21T23:59:59',
      id: 'current',
      title: '2021-2',
    },
    next: {
      act: '개강',
      due: '2022-03-02T00:00:00',
      id: 'next',
      title: '2022-1',
    },
    nextCurrent: {
      act: '종강',
      due: '2022-06-21T11:59:59',
      id: 'nextCurrent',
      title: '2022-1',
    },
    seasonal: {
      act: '종강',
      due: '2022-01-11T23:59:59',
      id: 'seasonal',
      title: '2022 겨울 계절',
    },
  };

  it('인자로 주어진 시간이 현재 학기 종강시간 이전일 경우 semesters의 current값을 반환한다.', () => {
    const testDate = new Date('2021-10-07T00:00:00');
    const result = getCurrentSemester(semesters, testDate);
    expect(result).toBe(semesters.current);
  });

  it('인자로 주어진 시간이 현재 학기 종강시간과 일치할 경우 semesters의 current값을 반환한다.', () => {
    const testDate = new Date('2021-11-21T23:59:59');
    const result = getCurrentSemester(semesters, testDate);
    expect(result).toBe(semesters.current);
  });

  it('인자로 주어진 시간이 현재 학기 종강시간 이후, 다음학기 종강시간 이전일 경우 semesters의 next값을 반환한다.', () => {
    const testDate = new Date('2021-12-22T00:00:00');
    const result = getCurrentSemester(semesters, testDate);
    expect(result).toBe(semesters.next);
  });

  it('인자로 주어진 시간이 다음학기 종강시간과 일치할 경우 semesters의 next값을 반환한다.', () => {
    const testDate = new Date('2022-03-02T00:00:00');
    const result = getCurrentSemester(semesters, testDate);
    expect(result).toBe(semesters.next);
  });

  it('인자로 주어진 시간이 다음학기 종강시간 이후일 경우 semesters의 nextCurrent값을 반환한다.', () => {
    const testDate = new Date('2022-05-22T00:00:00');
    const result = getCurrentSemester(semesters, testDate);
    expect(result).toBe(semesters.nextCurrent);
  });
});
