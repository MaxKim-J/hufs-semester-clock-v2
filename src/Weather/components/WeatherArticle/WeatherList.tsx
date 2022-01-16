import { Campus, CampusWeather, Weather } from '@shared/services/api/types';
import { Text } from '@components/fundamentals/Text';
import useWeatherQuery from '@/Weather/queries/useWeatherQuery';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { userWeatherCampus } from '@/Weather/atoms';
import Button from '@components/fundamentals/Button';
import { convertWeatherEmoji } from '@/Weather/utils/weatherHelper';
import Emoji from '@components/fundamentals/Emoji';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';

function WeatherList() {
  const weathers = useWeatherQuery() as Weather[];

  // 이거 쿼리 안으로?
  const campusWeather = useMemo(
    () =>
      weathers.reduce(
        (acc: CampusWeather, cur) =>
          cur.reginal === 'seoul'
            ? { ...acc, seoul: acc.seoul.concat(cur) }
            : { ...acc, global: acc.global.concat(cur) },
        { seoul: [], global: [] }
      ),
    [weathers]
  );

  const [{ value: weatherCampusValue }, setWeatherCampus] =
    useRecoilState(userWeatherCampus);

  const toggleWeatherCampus = () => {
    setWeatherCampus((state) => ({
      ...state,
      value: state.value === 'seoul' ? 'global' : 'seoul',
    }));
  };

  return (
    <>
      <Spacer height="size8" />
      <div css={weatherListHeaderStyle}>
        <Text size="size12" color="darkGray">
          ※ 양 캠퍼스 5일간의 날씨를 보여드립니다.
        </Text>
        <Button
          noBorder
          color="black"
          size="size12"
          onClick={toggleWeatherCampus}
        >
          {weatherCampusValue as Campus} 캠퍼스로 바꾸기
        </Button>
      </div>
      <Spacer />
      <ol css={weatherListStyle}>
        {campusWeather[weatherCampusValue ?? 'seoul'].map((weather) => (
          <li key={weather.id} css={weatherContentStyle}>
            <Text color="black">{weather.date}</Text>
            <Text color="black">
              <Emoji
                size="size32"
                emoji={convertWeatherEmoji(weather.weatherId)}
              />
            </Text>
            <Text color="black">{weather.temp}</Text>
          </li>
        ))}
      </ol>
    </>
  );
}

const weatherListHeaderStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const weatherListStyle = css`
  display: flex;
  justify-content: space-between;
`;

const weatherContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WeatherList;
