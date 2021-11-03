import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Weather } from '@/services/api/types';
import ApiClient from '@/services/api';

const useWeatherQuery = (): Weather[] | undefined => {
  const { data: weatherData } = useQuery<Weather[], AxiosError>({
    queryKey: 'weather',
    queryFn: async () => {
      const { data } = await ApiClient.getWeather();
      return data as Weather[];
    },
  });
  return weatherData;
};

export default useWeatherQuery;
