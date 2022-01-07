import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import SeasonalSettingArticle from '@/SemesterClock/components/ClockSettingSection/SeasonalSettingArticle';

function ClockSettingSection() {
  return (
    <section>
      <Text weight="bold" size="size20">
        종강시간 설정
      </Text>
      <Spacer height="size16" />
      <SeasonalSettingArticle />
      <Spacer height="size16" />
    </section>
  );
}

export default ClockSettingSection;
