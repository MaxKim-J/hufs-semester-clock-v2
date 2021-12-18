import { getBackgroundImagesBlob } from '@shared/services/api';

export const convertImageToDataUrl = async (url: string): Promise<string> => {
  const { data: blob } = await getBackgroundImagesBlob(url);
  return convertBlobToDataUrl(blob);
};

export const convertBlobToDataUrl = (file: Blob): Promise<string> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result as string);
  });
