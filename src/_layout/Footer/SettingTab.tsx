import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import UploadImage from '@/Background/components/BackgroundSetting/UploadImage';
import DefaultImage from '@/Background/components/BackgroundSetting/DefaultImage';

function SettingTab() {
  return (
    <>
      <Spacer height="size16" />
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

export default SettingTab;