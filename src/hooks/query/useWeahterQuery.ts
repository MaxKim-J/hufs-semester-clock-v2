import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { BackgroundImages } from '@/services/api/types';
import ApiClient from '@/services/api';

const useWeatherQuery = (
  campus: 'global' | 'seoul' | 'error'
): BackgroundImages | undefined => {
  const { data: backgroundData } = useQuery<BackgroundImages, AxiosError>({
    queryKey: 'semester',
    queryFn: async () => {
      const { data } = await ApiClient.getBackground({ campus });
      return data as BackgroundImages;
    },
  });
  return backgroundData;
};

export default useWeatherQuery;
