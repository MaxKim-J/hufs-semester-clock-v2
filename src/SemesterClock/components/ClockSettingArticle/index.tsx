import { Heading, Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SeasonalSetting from '@/SemesterClock/components/ClockSettingArticle/SeasonalSetting';
import ClockSettingArticleSkeleton from '@/SemesterClock/components/Skeleton/ClockSettingArticleSkeleton';

function ClockSettingArticle() {
  return (
    <article aria-labelledby="clock-setting-heading">
      <Heading tag="h2" id="clock-setting-heading">
        종강시간 설정
      </Heading>
      <Spacer />
      <AsyncBoundaryWithQuery pendingFallback={<ClockSettingArticleSkeleton />}>
        <SeasonalSetting />
      </AsyncBoundaryWithQuery>
    </article>
  );
}

export default ClockSettingArticle;
