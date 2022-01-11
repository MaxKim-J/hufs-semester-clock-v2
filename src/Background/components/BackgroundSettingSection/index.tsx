import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import UploadImageArticle from '@/Background/components/BackgroundSettingSection/UploadImageArticle';
import DefaultImageArticle from '@/Background/components/BackgroundSettingSection/DefaultImageArticle';

function BackgroundSettingSection() {
  return (
    <section>
      <Text weight="bold" size="size20">
        배경화면 설정
      </Text>
      <Spacer height="size16" />
      <UploadImageArticle />
      <Spacer height="size16" />
      <DefaultImageArticle />
    </section>
  );
}

export default BackgroundSettingSection;
