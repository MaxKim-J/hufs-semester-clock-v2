import { Heading, Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SeasonalSetting from '@/SemesterClock/components/ClockSettingArticle/SeasonalSetting';

function ClockSettingArticle() {
  return (
    <article aria-labelledby="clock-setting-heading">
      <Heading tag="h2" id="clock-setting-heading">
        종강시간 설정
      </Heading>
      <Spacer height="size16" />
      <AsyncBoundaryWithQuery
        pendingFallback={<Text>로딩중..</Text>}
        rejectedFallback={() => <div>실패</div>}
      >
        <SeasonalSetting />
      </AsyncBoundaryWithQuery>
    </article>
  );
}

export default ClockSettingArticle;
