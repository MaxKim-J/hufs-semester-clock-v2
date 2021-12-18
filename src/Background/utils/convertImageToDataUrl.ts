import { getBackgroundImagesBlob } from '@shared/services/api';
import { BackgroundImg } from '@shared/services/api/types';

const convertBackgroundImagesToDataUrl = async (
  backgroundImageUrls: BackgroundImg
): Promise<BackgroundImg> => {
  const dayImageUrl = await convertImageToDataUrl(
    backgroundImageUrls.dayImageUrl
  );
  const nightImageUrl = await convertImageToDataUrl(
    backgroundImageUrls.nightImageUrl
  );

  return {
    name: backgroundImageUrls.name,
    dayImageUrl,
    nightImageUrl,
  };
};

const convertImageToDataUrl = async (url: string): Promise<string> => {
  const { data: blob } = await getBackgroundImagesBlob(url);
  return convertBlobToDataUrl(blob);
};

export const convertBlobToDataUrl = (file: Blob): Promise<string> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result as string);
  });

export default convertBackgroundImagesToDataUrl;
