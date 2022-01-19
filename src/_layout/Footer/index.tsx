import { css } from '@emotion/react';
import { spaceTable } from '@style/variables';
import SettingTab from './SettingTab';
import DeveloperTab from '@/_layout/Footer/DeveloperTab';
import ScrollNoticeText from '@/_layout/Footer/ScrollNoticeText';

function TabFooter() {
  return (
    <footer css={tabFooterStyle}>
      <SettingTab />
      <ScrollNoticeText />
      <DeveloperTab />
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
  align-items: center;
`;

export default TabFooter;
