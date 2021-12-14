import { css } from '@emotion/react';
import Tab from '@components/fundamentals/Tab';
import SettingTab from './SettingTab';
import Index from '@/TabFooter/components/DeveloperTab';

function TabFooter() {
  return (
    <footer css={tabFooterStyle}>
      <Tab title="설정" direction="left">
        <SettingTab />
      </Tab>
      <Tab title="개발자 소개" direction="right">
        <Index />
      </Tab>
    </footer>
  );
}

const tabFooterStyle = css`
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;

export default TabFooter;
