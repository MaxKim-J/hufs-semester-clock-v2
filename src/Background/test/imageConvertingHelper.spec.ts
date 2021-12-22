import { convertBlobToDataUrl } from '@/Background/utils/imageConvertingHelper';

describe('이미지 파일 blob을 DataUrl로 변환한다.', () => {
  it('jpeg 이미지 파일을 Base64 DataURL로 변환한다.', async () => {
    const jpegFile = new File(['mockFile'], 'mock.jpeg', {
      type: 'image/jpeg',
    });
    const dataUrl = await convertBlobToDataUrl(jpegFile);
    expect(dataUrl).toMatch(/data:image\/jpeg;base64,.*/);
  });

  it('png 이미지 파일을 Base64 DataURL로 변환한다.', async () => {
    const pngFile = new File(['mockFile'], 'mock.png', {
      type: 'image/png',
    });
    const dataUrl = await convertBlobToDataUrl(pngFile);
    expect(dataUrl).toMatch(/data:image\/png;base64,.*/);
  });
});
