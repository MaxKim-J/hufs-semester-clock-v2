import { Heading, Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import { readableHiddenHeading } from '@shared/styles/common';

function IntroduceArticle() {
  return (
    <article aria-labelledby="introduce-heading">
      <Heading tag="h2" id="introduce-heading" css={readableHiddenHeading}>
        개발자 인사
      </Heading>
      <Text>
        안녕하세요! 외대 종강시계를 개발, 유지보수하고있는
        김맥스(빅융소맨)입니다.
      </Text>
      <Spacer height="size16" />
      <Text>서울캠에서 융소(AI 융합전공)을 이중하고 있어요.</Text>
      <Text>앱에 대한 버그, 오타 제보나 제안 사항을 하단 입력창이나</Text>
      <Text>메일로 작성해 보내주시면 빠르게 반영하도록 하겠습니다.</Text>
      <Spacer height="size16" />
      <Text>앱 사용해주셔서 감사합니다!</Text>
    </article>
  );
}

export default IntroduceArticle;
