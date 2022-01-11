import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import UploadImage from '@/Background/components/BackgroundSetting/UploadImage';
import DefaultImage from '@/Background/components/BackgroundSetting/DefaultImage';
import ClockSettingSection from '@/SemesterClock/components/ClockSettingSection';
import UserInfoInputSection from '@/UserInfo/components/UserInfoInputSection';

function SettingTab() {
  return (
    <>
      <Spacer height="size16" />
      <ClockSettingSection />
      <UserInfoInputSection />
      <Text weight="bold" size="size20">
        배경화면 설정
      </Text>
      <Spacer height="size16" />
      <UploadImage />
      <Spacer height="size32" />
      <DefaultImage />
    </>
  );
}

export default SettingTab;
