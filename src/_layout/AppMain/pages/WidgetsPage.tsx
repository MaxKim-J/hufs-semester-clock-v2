import { css } from '@emotion/react';
import { readableHiddenHeading } from '@style/common';
import { Heading } from '@components/fundamentals/Text';
import TimerArticle from '@/Timer/components/TimerArticle';
import WeatherArticle from '@/Weather/components/WeatherArticle';
import TodayMenuArticle from '@/TodayMenu/components/TodayMenuArticle';
import CovidChartArticle from '@/CovidChart/components/CovidChartArticle';
import NotificationArticle from '@/Notification/components/NotificationArticle';

function WidgetsPage() {
  return (
    <section css={sectionStyle}>
      <Heading tag="h1" css={readableHiddenHeading}>
        위젯 기능 컨텐츠
      </Heading>
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
        <div css={gridAreaStyle('covidChart')}>
          <CovidChartArticle />
        </div>
        <div css={gridAreaStyle('todayMenu')}>
          <TodayMenuArticle />
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
  h2 {
    font-size: 1rem;
  }
`;

const featureGridStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 30rem);
  grid-template-rows: repeat(6, 6.5rem);
  grid-template-areas:
    'notification weather'
    'notification weather'
    'notification covidChart'
    'timer covidChart'
    'timer todayMenu'
    'timer todayMenu';
  grid-column-gap: 1rem;
`;

export default WidgetsPage;
