import { useRecoilState } from 'recoil';
import { useMemo } from 'react';
import { Heading, Text } from '@components/fundamentals/Text';
import { TextArea } from '@components/fundamentals/Input';
import Button from '@components/fundamentals/Button';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { spaceTable } from '@style/variables';
import useInput from '@shared/hooks/useInput';
import { getHoursFromTimestamp, getNow } from '@shared/utils/timeHelper';
import useFeedbackMutation from '@/DeveloperIntroduce/queries/useFeedbackMutation';
import { userLatestFeedbackDate } from '@/DeveloperIntroduce/atoms';

function FeedbackInputArticle() {
  const feedbackMutation = useFeedbackMutation();

  const [latestFeedbackDate, setLatestFeedbackDate] = useRecoilState(
    userLatestFeedbackDate
  );

  const isFeedbackWritable = useMemo(
    () =>
      latestFeedbackDate.value === null ||
      getHoursFromTimestamp(+getNow() - latestFeedbackDate.value) > 24,
    [latestFeedbackDate]
  );

  const feedbackInput = useInput<HTMLTextAreaElement>({
    name: 'feedback',
  });

  const submitFeedback = () => {
    feedbackMutation.mutate(feedbackInput.value);
    feedbackInput.resetInput();
    setLatestFeedbackDate((state) => ({ ...state, value: +getNow() }));
  };

  return (
    <article aria-labelledby="feedback-heading">
      <Heading tag="h2" id="feedback-heading">
        앱 개선사항 보내기
      </Heading>
      <TextArea
        size="size14"
        value={feedbackInput.value}
        placeholder="하루에 한번만 보낼 수 있어요. 200자 이내로 작성해주세요!"
        title="앱 개선사항 보내기"
        aria-invalid={feedbackMutation.isError}
        aria-errormessage="feedback-error-message"
        onChange={feedbackInput.handleInput}
      />
      <Spacer height="size4" />
      <div css={buttonContainerStyle}>
        <Button onClick={submitFeedback} disabled={!isFeedbackWritable}>
          보내기
        </Button>
        {feedbackMutation.isError ? (
          <Text
            id="feedback-error-message"
            color="red"
            size="size12"
            css={errorMessageStyle}
          >
            앱 개선사항을 보내는 도중 오류가 발생했습니다.
          </Text>
        ) : null}
        {feedbackMutation.isLoading ? (
          <Text
            role="alert"
            aria-live="polite"
            size="size12"
            css={errorMessageStyle}
          >
            피드백 전송중입니다. 탭을 닫지 말고 기다려주세요...
          </Text>
        ) : null}
        {feedbackMutation.isSuccess ? (
          <Text
            role="alert"
            aria-live="polite"
            size="size12"
            color="green"
            css={errorMessageStyle}
          >
            피드백 전송완료!
          </Text>
        ) : null}
      </div>
    </article>
  );
}

const buttonContainerStyle = css`
  display: flex;
  align-items: center;
`;

const errorMessageStyle = css`
  margin-left: ${spaceTable.size16};
`;

export default FeedbackInputArticle;
