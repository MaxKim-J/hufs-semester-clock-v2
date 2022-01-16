import { useQuery } from 'react-query';
import { CampusWeather } from '@shared/services/api/types';
import { getWeather } from '@shared/services/api';
import { getCampusWeather } from '@/Weather/utils/weatherHelper';

const useWeatherQuery = (): CampusWeather | undefined => {
  const { data: weatherData } = useQuery({
    queryKey: 'weather',
    queryFn: async () => {
      const { data } = await getWeather();
      return data.weather;
    },
    suspense: true,
    staleTime: Infinity,
    select: (data) => getCampusWeather(data),
  });
  return weatherData;
};

export default useWeatherQuery;
