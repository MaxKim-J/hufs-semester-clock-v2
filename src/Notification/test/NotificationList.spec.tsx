import { render, screen, fireEvent } from '@testing-library/react';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import TestBoundary from '@components/boundries/TestBoundary';
import axiosClient from '@shared/services/api/axiosClient';
import MockAdapter from 'axios-mock-adapter';
import NotificationList from '@/Notification/components/NotificationArticle/NotficationList';

describe('USER INTERACTION: 유저는 학사공지를 페이지네이션으로 탐색할 수 있다.', () => {
  const NOTI_PER_INDEX = 5;
  const notifications = Array.from({ length: 15 }, (_, i) => ({
    date: '01-17',
    id: i + 1,
    link: 'http://builder.hufs.ac.kr',
    title: `${i + 1}번째 공지사항`,
  }));

  beforeAll(() => {
    const mockAxios = new MockAdapter(axiosClient);
    mockAxios.onGet('/notification').reply(200, { notifications });
  });

  beforeEach(() => {
    render(
      <TestBoundary>
        <AsyncBoundaryWithQuery>
          <NotificationList />
        </AsyncBoundaryWithQuery>
      </TestBoundary>
    );
  });

  it('다음 버튼을 누를 경우, 현재로부터 다음 5개의 학사공지가 표시된다.', async () => {
    const nextButton = await screen.findByText('다음');
    fireEvent.click(nextButton);

    const notificationElements = screen.getAllByText(/\d번째 공지사항/i);
    const when = notificationElements.map(
      (element) => element.textContent?.slice(8) ?? ''
    );

    expect(when).toEqual(
      notifications
        .map((noti) => noti.title)
        .slice(NOTI_PER_INDEX, NOTI_PER_INDEX * 2)
    );
  });

  it('이전 버튼을 누를 경우, 현재로부터 이전 5개의 학사공지가 표시된다.', async () => {
    const nextButton = await screen.findByText('다음');
    const prevButton = await screen.findByText('이전');
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    const notificationElements = screen.getAllByText(/\d번째 공지사항/i);
    const when = notificationElements.map(
      (element) => element.textContent?.slice(8) ?? ''
    );

    expect(when).toEqual(
      notifications.map((noti) => noti.title).slice(0, NOTI_PER_INDEX)
    );
  });

  it('목록이 첫번째 페이징 인덱스에 있는 경우, 이전 버튼은 인덱스를 변경시키지 않는다.', async () => {
    const prevButton = await screen.findByText('이전');
    fireEvent.click(prevButton);
    const indexText = screen.getByRole('alert');
    expect(indexText.textContent).toBe('1');
  });

  it('목록이 마지막 페이징 인덱스에 있는 경우, 다음 버튼은 인덱스를 변경시키지 않는다.', async () => {
    const nextButton = await screen.findByText('다음');
    for (
      let i = 0;
      i < Math.floor(notifications.length / NOTI_PER_INDEX);
      i += 1
    ) {
      fireEvent.click(nextButton);
    }
    const indexText = screen.getByRole('alert');
    expect(indexText.textContent).toBe('3');
  });
});
