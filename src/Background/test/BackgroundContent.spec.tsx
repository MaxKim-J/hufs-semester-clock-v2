import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import { MutableSnapshot } from 'recoil';
import TestBoundary from '@components/boundries/TestBoundary';
import BackgroundContent from '@/Background/components/BackgroundContent';

describe('배경화면 초기값 설정', () => {
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

  it('배경화면 초기값이 Recoil에 설정되어 있을 경우 현재 시간에 따라 적합한 배경화면이 나타난다', async () => {
    const { findByTestId } = render(
      <TestBoundary recoilState={recoilState}>
        <BackgroundContent />
      </TestBoundary>
    );

    await waitFor(async () => {
      const backgroundElement = await findByTestId('backgroundImage');
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
