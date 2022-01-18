import BoxLayout from '@components/fundamentals/BoxLayout';
import { useRecoilValue } from 'recoil';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import WeatherList from '@/Weather/components/WeatherArticle/WeatherList';
import { userWeatherCampus } from '@/Weather/atoms';
import WeatherArticleSkeleton from '@/Weather/components/WeatherArticle/WeatherArticleSkeleton';

function WeatherArticle() {
  const weatherCampus = useRecoilValue(userWeatherCampus);

  return (
    <BoxLayout title="외대 날씨" labelId="hufs-weather">
      {weatherCampus.status === 'initialized' ? (
        <AsyncBoundaryWithQuery pendingFallback={<WeatherArticleSkeleton />}>
          <WeatherList />
        </AsyncBoundaryWithQuery>
      ) : (
        <WeatherArticleSkeleton />
      )}
    </BoxLayout>
  );
}

export default WeatherArticle;
