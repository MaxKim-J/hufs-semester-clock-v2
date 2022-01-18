import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import IntroduceArticle from '../../DeveloperIntroduce/components/IntroduceArticle';
import FeedbackInputArticle from '../../DeveloperIntroduce/components/FeedbackInputArticle';
import AppLinkArticle from '../../DeveloperIntroduce/components/AppLinkArticle';

function DeveloperTab() {
  return (
    <section>
      <Spacer height="size16" />
      <IntroduceArticle />
      <Spacer height="size32" />
      <FeedbackInputArticle />
      <Spacer height="size32" />
      <AppLinkArticle />
      <Spacer height="size16" />
      <Text size="size12">
        외대종강시계 {process.env.VERSION} © Max Jonghyuk Kim. 2022
      </Text>
    </section>
  );
}

export default DeveloperTab;
