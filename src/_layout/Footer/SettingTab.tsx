import Spacer from '@components/fundamentals/Spacer';
import ClockSettingSection from '@/SemesterClock/components/ClockSettingSection';
import UserInfoInputSection from '@/UserInfo/components/UserInfoInputSection';
import BackgroundSettingSection from '@/Background/components/BackgroundSettingSection';

function SettingTab() {
  return (
    <section>
      <Spacer height="size16" />
      <ClockSettingSection />
      <Spacer height="size32" />
      <UserInfoInputSection />
      <Spacer height="size32" />
      <BackgroundSettingSection />
    </section>
  );
}

export default SettingTab;
