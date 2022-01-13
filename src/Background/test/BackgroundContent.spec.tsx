import { waitFor, render } from '@testing-library/react';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import { MutableSnapshot } from 'recoil';
import TestBoundary from '@components/boundries/TestBoundary';
import BackgroundContent from '@/Background/components/BackgroundContent';

describe('배경화면 설정', () => {
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

    const { getByTestId } = render(
      <TestBoundary recoilState={recoilState}>
        <AsyncBoundaryWithQuery
          rejectedFallback={() => null}
          pendingFallback={<div>로딩</div>}
        >
          <BackgroundContent />
        </AsyncBoundaryWithQuery>
      </TestBoundary>
    );

    await waitFor(() => {
      const backgroundElement = getByTestId('backgroundImage');
      const imageUrl =
        new Date().getHours() < 18 && new Date().getHours() > 5
          ? 'dayImageUrl'
          : 'nightImageUrl';

      expect(backgroundElement).toHaveStyle(
        `background-image: url(${imageUrl})`
      );
    });
  });
});
