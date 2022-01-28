import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MutableSnapshot } from 'recoil';
import MockAdapter from 'axios-mock-adapter';
import axiosClient from '@shared/services/api/axiosClient';
import { Semesters } from '@shared/services/api/types';
import { subDays, addDays } from 'date-fns';
import TestBoundary from '@components/boundries/TestBoundary';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SeasonalSetting from '@/SemesterClock/components/ClockSettingArticle/SeasonalSetting';
import SemesterInfo from '@/SemesterClock/components/ClockSection/SemsterClockArticle/SemesterInfo';
import { isUserSeasonal } from '@/SemesterClock/atoms';

describe('USER INTERACTION: 현재가 계절학기 수강 기간일 경우, 유저는 종강시계 시점을 다음학기 개강, 계절학기 종강 2가지 시점으로 바꿀 수 있다.', () => {
  const semesters: Semesters = {
    current: {
      act: '종강',
      due: subDays(new Date(), 5).toJSON(),
      id: 'current',
      title: '이전학기',
    },
    seasonal: {
      act: '종강',
      due: addDays(new Date(), 5).toJSON(),
      id: 'seasonal',
      title: '계절학기',
    },
    next: {
      act: '개강',
      due: addDays(new Date(), 20).toJSON(),
      id: 'next',
      title: '다음학기',
    },
    nextCurrent: {
      act: '종강',
      due: addDays(new Date(), 150).toJSON(),
      id: 'nextCurrent',
      title: '다다음 학기',
    },
  };
  const mockAxios = new MockAdapter(axiosClient, { delayResponse: 200 });
  mockAxios.onGet('/semester').reply(200, semesters);

  const recoilState = ({ set }: MutableSnapshot) => {
    set(isUserSeasonal, {
      status: 'initialized',
      value: false,
    });
  };

  render(
    <TestBoundary recoilState={recoilState}>
      <AsyncBoundaryWithQuery>
        <SeasonalSetting />
        <SemesterInfo semester={semesters.next} />
      </AsyncBoundaryWithQuery>
    </TestBoundary>
  );

  it('현재가 계절학기 수강 기간일 경우, 계절학기 전환 스위치가 활성화된다.', async () => {
    await waitFor(() => {
      const seasonalNotice =
        screen.queryByText('계절학기 수강 기간이 아닙니다.');
      expect(seasonalNotice).not.toBeInTheDocument();
    });
  });

  it('현재 종강시계 기준 시간이 다음학기 개강 시점일 경우, 전환 스위치를 누르면 기준 시간이 계절학기 종강 시간으로 바뀐다.', async () => {
    const seasonalSwitch = await screen.findByRole('checkbox', {
      checked: false,
    });
    fireEvent.click(seasonalSwitch);
    const semesterText = await screen.findByText(
      new RegExp(semesters.seasonal.title, 'g')
    );
    expect(semesterText).toBeInTheDocument();
  });

  it('현재 종강시계 기준 시간이 계절학기 종강 시점일 경우, 전환 스위치를 누르면 기준 시간이 다음학기 개강 시간으로 바뀐다.', async () => {
    const seasonalSwitch = await screen.findByRole('checkbox', {
      checked: true,
    });
    fireEvent.click(seasonalSwitch);
    const semesterText = await screen.findByText(
      new RegExp(semesters.next.title, 'g')
    );
    expect(semesterText).toBeInTheDocument();
  });
});

describe('USER INTERACTION: 현재가 계절학기 수강 기간이 아닐 경우, 유저는 종강시계 시점을 계절학기 종강 시점으로 바꿀 수 없다.', () => {
  const semesters: Semesters = {
    current: {
      act: '종강',
      due: subDays(new Date(), 5).toJSON(),
      id: 'current',
      title: '2021-2',
    },
    seasonal: {
      act: '종강',
      due: subDays(new Date(), 3).toJSON(),
      id: 'seasonal',
      title: '2022 겨울 계절',
    },
    next: {
      act: '개강',
      due: addDays(new Date(), 20).toJSON(),
      id: 'next',
      title: '2022-1',
    },
    nextCurrent: {
      act: '종강',
      due: addDays(new Date(), 150).toJSON(),
      id: 'nextCurrent',
      title: '2022-1',
    },
  };
  const mockAxios = new MockAdapter(axiosClient, { delayResponse: 200 });
  mockAxios.onGet('/semester').reply(200, semesters);

  const recoilState = ({ set }: MutableSnapshot) => {
    set(isUserSeasonal, {
      status: 'initialized',
      value: false,
    });
  };

  render(
    <TestBoundary recoilState={recoilState}>
      <AsyncBoundaryWithQuery>
        <SeasonalSetting />
        <SemesterInfo semester={semesters.next} />
      </AsyncBoundaryWithQuery>
    </TestBoundary>
  );
  it('현재가 계절학기 수강 기간이 아닐 경우, 계절학기 전환 스위치가 비활성화된다.', async () => {
    const seasonalNotice = await screen.findByText(
      '계절학기 수강 기간이 아닙니다.'
    );
    expect(seasonalNotice).toBeInTheDocument();
  });
});
