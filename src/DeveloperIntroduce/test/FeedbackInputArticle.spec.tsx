import { MutableSnapshot } from 'recoil';
import subHours from 'date-fns/subHours';
import { cleanup, render, screen } from '@testing-library/react';
import TestBoundary from '@components/boundries/TestBoundary';
import FeedbackInputArticle from '@/DeveloperIntroduce/components/FeedbackInputArticle';
import { userLatestFeedbackDate } from '@/DeveloperIntroduce/atoms';

describe('USER INTERACTION: 유저는 앱에 대한 피드백을 보낼 수 있다.', () => {
  afterEach(() => {
    cleanup();
  });

  it('유저가 이미 24시간 내에 피드백을 보냈다면, 피드백을 보낼 수 없다.', () => {
    const recoilState = ({ set }: MutableSnapshot) => {
      set(userLatestFeedbackDate, {
        status: 'initialized',
        value: +subHours(new Date(), 5),
      });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <FeedbackInputArticle />
      </TestBoundary>
    );

    const sendButton = screen.getByText('보내기');
    expect(sendButton).toBeDisabled();
  });

  it('유저가 24시간 내에 피드백을 보내지 않았다면, 피드백을 보낼 수 있다.', () => {
    const recoilState = ({ set }: MutableSnapshot) => {
      set(userLatestFeedbackDate, {
        status: 'initialized',
        value: +subHours(new Date(), 25),
      });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <FeedbackInputArticle />
      </TestBoundary>
    );

    const sendButton = screen.getByText('보내기');
    expect(sendButton).not.toBeDisabled();
  });
});
