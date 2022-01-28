import { render, cleanup, screen } from '@testing-library/react';
import { MutableSnapshot } from 'recoil';
import { SemesterValue } from '@shared/services/api/types';
import { sectionIndexAtom } from '@shared/atoms/common';
import TestBoundary from '@components/boundries/TestBoundary';
import MainClock from '@/SemesterClock/components/ClockSection/SemsterClockArticle/MainClock';
import SemesterInfo from '@/SemesterClock/components/ClockSection/SemsterClockArticle/SemesterInfo';

describe('COMPLEX UI: 종강시계(MainClock)는 설정된 semester에 따라 시계가 동작하거나 멈춘다. ', () => {
  afterEach(() => {
    cleanup();
  });

  it('설정된 종강 시간이 현재 기준 미래일 경우 시계가 종강까지 남은 시간을 표시한다.', () => {
    const endSemester: SemesterValue = {
      act: '종강',
      due: '2024-11-21T23:59:59',
      id: 'current',
      title: '2024-2',
    };

    const recoilState = ({ set }: MutableSnapshot) => {
      set(sectionIndexAtom, { current: 0, max: 0 });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <SemesterInfo semester={endSemester} />
        <MainClock semester={endSemester} restartClock={() => {}} />
      </TestBoundary>
    );

    expect(
      screen.queryByText('2024-2학기 종강(2024.11.21)까지')
    ).toBeInTheDocument();
    expect(screen.queryByText('일')).toBeInTheDocument();
    expect(screen.queryByText('시간')).toBeInTheDocument();
    expect(screen.queryByText('분')).toBeInTheDocument();
    expect(screen.queryByText('초')).toBeInTheDocument();
  });

  it('설정된 개강 시간이 현재 기준 미래일 경우 시계가 개강까지 남은 시간을 표시한다.', () => {
    const startSemester: SemesterValue = {
      act: '개강',
      due: '2024-11-21T23:59:59',
      id: 'current',
      title: '2024-2',
    };

    const recoilState = ({ set }: MutableSnapshot) => {
      set(sectionIndexAtom, { current: 0, max: 0 });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <SemesterInfo semester={startSemester} />
        <MainClock semester={startSemester} restartClock={() => {}} />
      </TestBoundary>
    );

    expect(
      screen.queryByText('2024-2학기 개강(2024.11.21)까지')
    ).toBeInTheDocument();
    expect(screen.queryByText('일')).toBeInTheDocument();
    expect(screen.queryByText('시간')).toBeInTheDocument();
    expect(screen.queryByText('분')).toBeInTheDocument();
    expect(screen.queryByText('초')).toBeInTheDocument();
  });

  it('설정된 종강 시간이 이미 끝난 경우 시간이 만료되었음을 알린다.', () => {
    const oldSemester: SemesterValue = {
      act: '종강',
      due: '2021-11-21T23:59:59',
      id: 'current',
      title: '2021-2',
    };

    const recoilState = ({ set }: MutableSnapshot) => {
      set(sectionIndexAtom, { current: 0, max: 0 });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <SemesterInfo semester={oldSemester} />
        <MainClock semester={oldSemester} restartClock={() => {}} />
      </TestBoundary>
    );

    expect(screen.queryByText('시계 재시작')).toBeInTheDocument();
  });
});
