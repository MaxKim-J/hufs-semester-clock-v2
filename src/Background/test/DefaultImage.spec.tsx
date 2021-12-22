import { render, fireEvent, waitFor } from '@testing-library/react';
import TestBoundary from '@components/boundries/TestBoundary';
import { MutableSnapshot } from 'recoil';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import BackgroundContent from '@/Background/components/BackgroundContent';
import DefaultImage from '@/Background/components/BackgroundSetting/DefaultImage';

describe('기본 배경 이미지로 전환', () => {
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

  it('글로벌 버튼을 눌렀을 때 배경화면을 글로벌 캠퍼스 배경 이미지로 전환한다.', async () => {
    const globalButton = getByText('글로벌');
    fireEvent.click(globalButton);
    await waitFor(() => {
      const backgroundElement = getByTestId('backgroundImage');
      expect(backgroundElement.id).toEqual('global');
    });
  });

  it('서울 버튼을 눌렀을 때 배경화면을 서울 캠퍼스 배경 이미지로 전환한다.', async () => {
    const seoulButton = getByText('서울');
    fireEvent.click(seoulButton);
    await waitFor(() => {
      const backgroundElement = getByTestId('backgroundImage');
      expect(backgroundElement.id).toEqual('seoul');
    });
  });
});
