import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import Tab from '@components/fundamentals/Tab';
import IntroduceArticle from '../../DeveloperIntroduce/components/IntroduceArticle';
import FeedbackInputArticle from '../../DeveloperIntroduce/components/FeedbackInputArticle';
import AppLinkArticle from '../../DeveloperIntroduce/components/AppLinkArticle';

function DeveloperTab() {
  return (
    <Tab title="개발자 소개" direction="right">
      <Spacer height="size16" />
      <IntroduceArticle />
      <Spacer height="size16" />
      <FeedbackInputArticle />
      <Spacer height="size16" />
      <AppLinkArticle />
      <Spacer height="size16" />
      <Text size="size12">
        외대종강시계 {process.env.VERSION} © Max Jonghyuk Kim. 2022
      </Text>
    </Tab>
  );
}

export default DeveloperTab;
