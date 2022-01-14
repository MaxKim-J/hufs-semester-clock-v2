import MockAdapter from 'axios-mock-adapter';
import axiosClient from '@shared/services/api/axiosClient';
import { MutableSnapshot } from 'recoil';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TestBoundary from '@components/boundries/TestBoundary';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import UserInfoDisplayArticle from '@/UserInfo/components/UserInfoSection/UserInfoDisplayArticle';
import UserInfoInputArticle from '@/UserInfo/components/UserInfoInputSection/UserInfoInputArticle';
import { userInfo } from '@/UserInfo/atoms';

describe('학번/이름 설정란에서 유저의 학번/이름 정보를 바꿀 수 있다.', () => {
  beforeAll(() => {
    const mockAxios = new MockAdapter(axiosClient, { delayResponse: 200 });
    mockAxios.onGet(`/admission`).reply(200, [
      { key: 2022, value: '22' },
      { key: 2021, value: '21' },
      { key: 2020, value: '20' },
      { key: 2019, value: '19' },
    ]);
  });

  beforeEach(() => {
    const recoilState = ({ set }: MutableSnapshot) => {
      set(userInfo, {
        status: 'initialized',
        value: null,
      });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <AsyncBoundaryWithQuery>
          <UserInfoDisplayArticle />
          <UserInfoInputArticle />
        </AsyncBoundaryWithQuery>
      </TestBoundary>
    );
  });

  it('브라우저에 저장된 정보가 없을 경우, 기본 이름(학우님)을 사용한다.', async () => {
    screen.getByText(/학우/i);
  });

  it('설정 탭을 통해 이름과 학번을 입력할 경우, 시계 화면의 학번, 이름, 입학 경과일이 변경된다.', async () => {
    await waitFor(
      () => {
        const nameInput = screen.getByTitle('이름 입력');
        const selectInput = screen.getByTitle('학번 선택');
        const submitButton = screen.getByText('저장하기');

        fireEvent.change(nameInput, { target: { value: '김맥스' } });
        fireEvent.change(selectInput, { target: { value: '19' } });
        fireEvent.click(submitButton);

        screen.getByText(/김맥스/i);
        screen.getByText(/19학번/i);
      },
      { timeout: 4500 }
    );
  });
});
