import BoxLayout from '@components/fundamentals/BoxLayout';
import { useRecoilValue } from 'recoil';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import WeatherList from '@/Weather/components/WeatherArticle/WeatherList';
import { userWeatherCampus } from '@/Weather/atoms';

function WeatherArticle() {
  const weatherCampus = useRecoilValue(userWeatherCampus);

  return (
    <BoxLayout title="외대 날씨">
      {weatherCampus.status === 'initialized' ? (
        <AsyncBoundaryWithQuery>
          <WeatherList />
        </AsyncBoundaryWithQuery>
      ) : (
        <div>로딩</div>
      )}
    </BoxLayout>
  );
}

export default WeatherArticle;
