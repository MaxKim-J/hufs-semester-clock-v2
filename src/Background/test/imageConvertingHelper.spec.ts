import { convertImageToDataUrl } from '@/Background/utils/imageConvertingHelper';

describe('convertImageToDataUrl: 이미지 URL을 blob으로 다운받아 DataUrl로 변환', () => {
  it('jpeg 이미지 URL을 Base64 DataURL로 변환한다.', async () => {
    const dataUrl = await convertImageToDataUrl(
      'https://picsum.photos/536/354'
    );
    expect(dataUrl).toMatch(/data:image\/jpeg;base64,.*/);
  });

  it('png 이미지 URL을 Base64 DataURL로 변환한다.', async () => {
    const dataUrl = await convertImageToDataUrl(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png'
    );
    expect(dataUrl).toMatch(/data:image\/png;base64,.*/);
  });
});
