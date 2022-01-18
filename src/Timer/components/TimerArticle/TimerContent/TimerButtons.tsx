import Button from '@components/fundamentals/Button';
import { css } from '@emotion/react';

type TimerButtonsProps = {
  turnOnTimer: () => void;
  turnOffTimer: () => void;
  resetTimer: () => void;
  isTimerOn: boolean;
};

function TimerButtons({
  turnOffTimer,
  turnOnTimer,
  resetTimer,
  isTimerOn,
}: TimerButtonsProps) {
  return (
    <div css={buttonWrapperStyle}>
      <Button
        type="button"
        color="black"
        disabled={isTimerOn}
        onClick={turnOnTimer}
      >
        시작
      </Button>
      <Button
        type="button"
        color="black"
        disabled={!isTimerOn}
        onClick={turnOffTimer}
      >
        정지
      </Button>
      <Button
        type="button"
        color="black"
        disabled={isTimerOn}
        onClick={resetTimer}
      >
        리셋
      </Button>
    </div>
  );
}
const buttonWrapperStyle = css`
  > button {
    margin: 0 1rem;
  }
`;

export default TimerButtons;
