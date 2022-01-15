import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SeasonalSettingArticle from '@/SemesterClock/components/ClockSettingSection/SeasonalSettingArticle';

function ClockSettingSection() {
  return (
    <section>
      <Text weight="bold" size="size20">
        종강시간 설정
      </Text>
      <Spacer height="size16" />
      <AsyncBoundaryWithQuery
        pendingFallback={<Text>로딩중..</Text>}
        rejectedFallback={() => <div>실패</div>}
      >
        <SeasonalSettingArticle />
      </AsyncBoundaryWithQuery>
    </section>
  );
}

export default ClockSettingSection;
