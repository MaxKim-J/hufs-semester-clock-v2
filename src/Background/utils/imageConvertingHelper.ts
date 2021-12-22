import { getImageBlob } from '@shared/services/api';

export const convertImageToDataUrl = async (
  imageUrl: string
): Promise<string> => {
  const { data: blob } = await getImageBlob(imageUrl);
  return convertBlobToDataUrl(blob);
};

export const convertBlobToDataUrl = (file: Blob): Promise<string> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result as string);
  });
