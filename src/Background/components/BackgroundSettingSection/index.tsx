import { Heading } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import UploadImageArticle from '@/Background/components/BackgroundSettingSection/UploadImageArticle';
import DefaultImageArticle from '@/Background/components/BackgroundSettingSection/DefaultImageArticle';

function BackgroundSettingSection() {
  return (
    <section aria-labelledby="bgimg-setting-heading">
      <Heading tag="h2" id="bgimg-setting-heading">
        배경화면 설정
      </Heading>
      <Spacer height="size16" />
      <UploadImageArticle />
      <Spacer height="size16" />
      <DefaultImageArticle />
    </section>
  );
}

export default BackgroundSettingSection;
