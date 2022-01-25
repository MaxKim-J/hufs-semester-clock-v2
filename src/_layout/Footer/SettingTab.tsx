import Spacer from '@components/fundamentals/Spacer';
import Tab from '@components/fundamentals/Tab';
import ClockSettingArticle from '@/SemesterClock/components/ClockSettingArticle';
import UserInfoInputArticle from '@/UserInfo/components/UserInfoInputArticle';
import BackgroundSettingSection from '@/Background/components/BackgroundSettingSection';

function SettingTab() {
  return (
    <Tab title="설정" direction="left">
      <Spacer height="size16" />
      <ClockSettingArticle />
      <Spacer height="size16" />
      <UserInfoInputArticle />
      <Spacer height="size16" />
      <BackgroundSettingSection />
    </Tab>
  );
}

export default SettingTab;
