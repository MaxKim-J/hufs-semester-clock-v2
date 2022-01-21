import { MutableSnapshot } from 'recoil';
import { fireEvent, render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axiosClient from '@shared/services/api/axiosClient';
import TestBoundary from '@components/boundries/TestBoundary';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import WeatherList from '@/Weather/components/WeatherArticle/WeatherList';
import { userWeatherCampus } from '@/Weather/atoms';

describe('USER INTERACTION: 유저는 캠퍼스별(서울/글로벌) 날씨를 모두 확인할 수 있다.', () => {
  const weathers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: '01/21',
    reginal: i % 2 == 0 ? 'seoul' : 'global',
    temp: '-11/2',
    weatherId: 800,
  }));

  beforeAll(() => {
    const mockAxios = new MockAdapter(axiosClient);
    mockAxios.onGet('/weather').reply(200, { weather: weathers });
  });

  beforeEach(() => {
    const recoilState = ({ set }: MutableSnapshot) => {
      set(userWeatherCampus, {
        status: 'initialized',
        value: null,
      });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <AsyncBoundaryWithQuery>
          <WeatherList />
        </AsyncBoundaryWithQuery>
      </TestBoundary>
    );
  });

  it('날씨 위젯의 최초 캠퍼스 설정은 서울캠퍼스이다.', async () => {
    const weatherDescription = await screen.findByText(/서울 캠퍼스/i);
    expect(weatherDescription).toBeInTheDocument();
  });

  it('버튼을 클릭하면 캠퍼스와 캠퍼스별 날씨가 전환된다.', async () => {
    const changeButton = await screen.findByText('캠퍼스 바꾸기');
    fireEvent.click(changeButton);

    const weatherDescription = screen.getByText(/글로벌 캠퍼스/i);
    expect(weatherDescription).toBeInTheDocument();
  });
});
