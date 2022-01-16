import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Weather } from '@shared/services/api/types';
import { getWeather } from '@shared/services/api';

const useWeatherQuery = (): Weather[] | undefined => {
  const { data: weatherData } = useQuery<Weather[], AxiosError>({
    queryKey: 'weather',
    queryFn: async () => {
      const { data } = await getWeather();
      return data.weather as Weather[];
    },
    suspense: true,
  });
  return weatherData;
};

export default useWeatherQuery;
