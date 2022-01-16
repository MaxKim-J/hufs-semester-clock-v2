import { css } from '@emotion/react';
import TimerArticle from '@/Timer/components/TimerArticle';
import WeatherArticle from '@/Weather/components/WeatherArticle';
import TodayMenuArticle from '@/TodayMenu/components/TodayMenuArticle';
import CovidChartArticle from '@/CovidChart/components/CovidChartArticle';
import NotificationArticle from '@/Notification/components/NotificationArticle';

function FeaturesPage() {
  return (
    <section css={sectionStyle}>
      <div css={featureGridStyle}>
        <div css={gridAreaStyle('notification')}>
          <NotificationArticle />
        </div>
        <div css={gridAreaStyle('weather')}>
          <WeatherArticle />
        </div>
        <div css={gridAreaStyle('timer')}>
          <TimerArticle />
        </div>
        <div css={gridAreaStyle('todayMenu')}>
          <TodayMenuArticle />
        </div>
        <div css={gridAreaStyle('covidChart')}>
          <CovidChartArticle />
        </div>
      </div>
    </section>
  );
}

const sectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const gridAreaStyle = (area: string) => css`
  width: 100%;
  height: 100%;
  grid-area: ${area};
`;

const featureGridStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 30rem);
  grid-template-rows: repeat(6, 6.5rem);
  grid-template-areas:
    'notification weather'
    'notification weather'
    'notification todayMenu'
    'timer todayMenu'
    'timer covidChart'
    'timer covidChart';
  grid-column-gap: 1rem;
`;

export default FeaturesPage;
