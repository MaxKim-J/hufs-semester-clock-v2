import { render, screen } from '@testing-library/react';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import { MutableSnapshot } from 'recoil';
import TestBoundary from '@components/boundries/TestBoundary';
import BackgroundContent from '@/Background/components/BackgroundContent';
import { userBackgroundImage } from '@/Background/atoms';

describe('COMPLEX UI: 미리 설정되어 있는 배경화면을 초기 화면에 표시한다.', () => {
  it('배경화면이 Recoil에 설정되어 있을 경우 현재 시간에 따라 적합한 배경화면이 나타난다', async () => {
    const recoilState = ({ set }: MutableSnapshot) => {
      set(userBackgroundImage, {
        status: 'initialized',
        value: {
          name: 'mockName',
          dayImageUrl: 'dayImageUrl',
          nightImageUrl: 'nightImageUrl',
        },
      });
    };

    render(
      <TestBoundary recoilState={recoilState}>
        <AsyncBoundaryWithQuery
          rejectedFallback={() => null}
          pendingFallback={<div>로딩</div>}
        >
          <BackgroundContent />
        </AsyncBoundaryWithQuery>
      </TestBoundary>
    );

    const imageUrl =
      new Date().getHours() < 18 && new Date().getHours() > 5
        ? 'dayImageUrl'
        : 'nightImageUrl';

    const backgroundElement = await screen.findByRole('img');
    expect(backgroundElement).toHaveStyle(`background-image: url(${imageUrl})`);
  });
});
