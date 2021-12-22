import { render, fireEvent, waitFor } from '@testing-library/react';
import TestBoundary from '@components/boundries/TestBoundary';
import React from 'react';
import { MutableSnapshot } from 'recoil';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import BackgroundContent from '@/Background/components/BackgroundContent';
import DefaultImage from '@/Background/components/BackgroundSetting/DefaultImage';

describe('', () => {
  const initialState = ({ set }: MutableSnapshot) => {
    set(userBackgroundImage, {
      status: 'initialized',
      value: {
        name: 'mockName',
        dayImageUrl: 'dayImageUrl',
        nightImageUrl: 'nightImageUrl',
      },
    });
  };

  const { getByText, getByTestId } = render(
    <TestBoundary recoilState={initialState}>
      <>
        <DefaultImage />
        <BackgroundContent />
      </>
    </TestBoundary>
  );

  it('글로벌 버튼 눌렀을 때 배경화면 전환', async () => {
    const globalButton = getByText('글로벌');
    fireEvent.click(globalButton);
    await waitFor(() => {
      const backgroundElement = getByTestId('backgroundImage');
      expect(backgroundElement.id).toEqual('global');
    });
  });

  it('서울 버튼 눌렀을 때 배경화면 전환', async () => {
    const seoulButton = getByText('서울');
    fireEvent.click(seoulButton);
    await waitFor(() => {
      const backgroundElement = getByTestId('backgroundImage');
      expect(backgroundElement.id).toEqual('seoul');
    });
  });
});
