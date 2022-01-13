import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import { MutableSnapshot } from 'recoil';
import { userBackgroundImage } from '@shared/atoms/userBackgroundImage';
import TestBoundary from '@components/boundries/TestBoundary';
import BackgroundContent from '@/Background/components/BackgroundContent';
import UploadImageArticle from '@/Background/components/BackgroundSettingSection/UploadImageArticle';

describe('커스텀 배경화면 업로드', () => {
  beforeEach(() => {
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
          <UploadImageArticle />
          <BackgroundContent />
        </AsyncBoundaryWithQuery>
      </TestBoundary>
    );
  });

  it('3MB 용량이 넘는 이미지의 경우 에러 메시지를 노출한다', () => {
    const fileInput = screen.getByTitle('배경화면 파일 업로드');
    const sizeOverFile = new File(['mockFile'], 'mock.jpeg', {
      type: 'image/jpeg',
    });
    Object.defineProperty(sizeOverFile, 'size', { value: 30000000 });
    fireEvent.change(fileInput, { target: { files: [sizeOverFile] } });
    const errorMessage = screen.getByTestId('errorMessage');
    expect(errorMessage).toBeTruthy();
  });

  it('이미지 확장자가 jpeg, png가 아닌 경우 에러 메시지를 노출한다.', () => {
    const fileInput = screen.getByTitle('배경화면 파일 업로드');
    const wrongExtFile = new File(['mockFile'], 'mock.pdf', {
      type: 'text/plain',
    });

    fireEvent.change(fileInput, { target: { files: [wrongExtFile] } });
    const errorMessage = screen.getByTestId('errorMessage');
    expect(errorMessage).toBeTruthy();
  });

  it('정상적인 파일 업로드인 경우 해당 이미지로 배경화면을 교체한다.', async () => {
    const fileInput = screen.getByTitle('배경화면 파일 업로드');
    const normalFile = new File(['mockFile'], 'mock.jpeg', {
      type: 'image/jpeg',
    });

    Object.defineProperty(normalFile, 'size', { value: 2000000 });
    fireEvent.change(fileInput, { target: { files: [normalFile] } });
    await waitFor(() => {
      const backgroundImage = screen.getByTestId('backgroundImage');
      expect(backgroundImage.id).toEqual('mock.jpeg');
    });
  });
});
