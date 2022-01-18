import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import DoubleArrow from '@shared/images/double-down-arrow.svg';
import Tab from '@components/fundamentals/Tab';
import SettingTab from './SettingTab';
import DeveloperTab from '@/_layout/Footer/DeveloperTab';

function TabFooter() {
  return (
    <footer css={tabFooterStyle}>
      <Tab title="설정" direction="left">
        <SettingTab />
      </Tab>
      <Tab title="개발자 소개" direction="right">
        <DeveloperTab />
      </Tab>
    </footer>
  );
}

const tabFooterStyle = css`
  padding: ${spaceTable.size16};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;

export default TabFooter;
