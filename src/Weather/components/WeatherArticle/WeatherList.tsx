import { Campus, CampusWeather } from '@shared/services/api/types';
import { Text } from '@components/fundamentals/Text';
import { useRecoilState } from 'recoil';
import Button from '@components/fundamentals/Button';
import Emoji from '@components/fundamentals/Emoji';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { transparentTable } from '@style/variables';
import { userWeatherCampus } from '@/Weather/atoms';
import useWeatherQuery from '@/Weather/queries/useWeatherQuery';
import {
  convertWeatherEmoji,
  convertWeatherTemp,
  translateCampusText,
} from '@/Weather/utils/weatherHelper';
import { formatMonthAndDay } from '@/_shared/utils/formatHelper';

function WeatherList() {
  const weathers = useWeatherQuery() as CampusWeather;

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
        <Text size="size12" color="darkGray" role="alert">
          5일간의 {translateCampusText(weatherCampusValue as Campus)} 날씨
        </Text>
        <Button
          noBorder
          color="darkGray"
          size="size12"
          onClick={toggleWeatherCampus}
        >
          캠퍼스 바꾸기
        </Button>
      </div>
      <Spacer />
      <ol css={weatherListStyle}>
        {weathers[weatherCampusValue ?? 'seoul'].map((weather) => (
          <li
            key={weather.id}
            css={weatherContentStyle}
            aria-label={`${formatMonthAndDay(
              weather.date,
              '/'
            )}의 날씨와 최저, 최고기온`}
          >
            <Text
              color="black"
              size="size12"
              weight="bold"
              css={weatherContentDateStyle}
            >
              {formatMonthAndDay(weather.date, '/')}
            </Text>
            <Spacer height="size4" />
            {[convertWeatherEmoji(weather.weatherId)].map((emoji) => (
              <Emoji
                shadow
                size="size32"
                key={emoji.label}
                emoji={emoji.value}
                label={emoji.label}
              />
            ))}
            <Spacer height="size4" />
            <div>
              {convertWeatherTemp(weather.temp).map((temp) => (
                <Text color="black" size="size12" key={temp}>
                  {temp}
                </Text>
              ))}
            </div>
            <Spacer height="size8" />
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

const weatherContentDateStyle = css`
  background-color: ${transparentTable.white90};
  padding: 0.25rem 0.5rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
  text-align: center;
`;

const weatherContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${transparentTable.white70};
  border-radius: 1rem;
  width: 4rem;
  padding: 0 0.5rem;
`;

export default WeatherList;
