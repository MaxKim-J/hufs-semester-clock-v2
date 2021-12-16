import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import UploadImage from '@/TabFooter/components/SettingTab/BackgroundSetting/UploadImage';
import DefaultImage from '@/TabFooter/components/SettingTab/BackgroundSetting/DefaultImage';

function BackgroundSetting() {
  return (
    <>
      <Text weight="bold" size="size20">
        배경화면 설정
      </Text>
      <Spacer height="size32" />
      <UploadImage />
      <Spacer height="size32" />
      <DefaultImage />
    </>
  );
}

export default BackgroundSetting;
