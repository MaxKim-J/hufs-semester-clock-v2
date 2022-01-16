import { render } from '@testing-library/react';
import { SemesterValue } from '@shared/services/api/types';
import MainClock from '@/SemesterClock/components/ClockSection/SemsterClockArticle/MainClock';
import SemesterInfo from '@/SemesterClock/components/ClockSection/SemsterClockArticle/SemesterInfo';

describe('Complex UI: 종강시계(MainClock)는 설정된 semester에 따라 시계가 동작하거나 멈춘다. ', () => {
  it('설정된 종강 시간이 현재 기준 미래일 경우 시계가 종강까지 남은 시간을 표시한다.', () => {
    const endSemester: SemesterValue = {
      act: '종강',
      due: '2024-11-21T23:59:59',
      id: 'current',
      title: '2024-2',
    };

    const { getByText } = render(
      <>
        <SemesterInfo semester={endSemester} />
        <MainClock semester={endSemester} evaluateSemester={() => {}} />
      </>
    );

    getByText('2024-2학기 종강(2024.11.21)까지');
    getByText('일');
    getByText('시간');
    getByText('분');
    getByText('초');
  });

  it('설정된 개강 시간이 현재 기준 미래일 경우 시계가 개강까지 남은 시간을 표시한다.', () => {
    const startSemester: SemesterValue = {
      act: '개강',
      due: '2024-11-21T23:59:59',
      id: 'current',
      title: '2024-2',
    };

    const { getByText } = render(
      <>
        <SemesterInfo semester={startSemester} />
        <MainClock semester={startSemester} evaluateSemester={() => {}} />
      </>
    );

    getByText('2024-2학기 개강(2024.11.21)까지');
    getByText('일');
    getByText('시간');
    getByText('분');
    getByText('초');
  });

  it('설정된 종강 시간이 이미 끝난 경우 시간이 만료되었음을 알린다.', () => {
    const oldSemester: SemesterValue = {
      act: '종강',
      due: '2021-11-21T23:59:59',
      id: 'current',
      title: '2021-2',
    };
    const { getByText } = render(
      <>
        <SemesterInfo semester={oldSemester} />
        <MainClock semester={oldSemester} evaluateSemester={() => {}} />
      </>
    );

    getByText('시계 재시작');
  });
});