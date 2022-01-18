import { Fragment } from 'react';
import { css } from '@emotion/react';
import upIcon from '@shared/images/up.svg';
import { Text } from '@components/fundamentals/Text';
import { formatDigits } from '@shared/utils/formatHelper';
import downIcon from '@shared/images/down.svg';
import useTimerDigits, {
  DigitType,
  ActionType,
} from '@/Timer/hooks/useTimerDigits';

type DigitDataType = {
  id: DigitType;
  text: '초' | '분' | '시간';
};

const digitData: DigitDataType[] = [
  {
    id: 'hours',
    text: '시간',
  },
  {
    id: 'minutes',
    text: '분',
  },
  {
    id: 'seconds',
    text: '초',
  },
];

type TimeDigitsProps = {
  targetMs: number;
  operateTargetMs: (operand: number) => void;
  isTimerOn: boolean;
};

function TimerDigits({
  targetMs,
  operateTargetMs,
  isTimerOn,
}: TimeDigitsProps) {
  const { getTargetMsOperand, currentDigits } = useTimerDigits(targetMs);

  const modifyTargetMs = (type: DigitType, actions: ActionType) => {
    operateTargetMs(getTargetMsOperand(type, actions));
  };

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      {digitData.map((digit, idx) => (
        <Fragment key={digit.id}>
          <div css={digitStyle}>
            {!isTimerOn && (
              <button
                onClick={() => {
                  modifyTargetMs(digit.id, 'increase');
                }}
              >
                <img src={upIcon} alt={`타이머 ${digit.text} 올리기`} />
              </button>
            )}
            <Text
              size="size80"
              color="black"
              aria-label={`타이머 ${digit.text}`}
            >
              {formatDigits(currentDigits[digit.id])}
            </Text>
            {!isTimerOn && (
              <button
                onClick={() => {
                  modifyTargetMs(digit.id, 'decrease');
                }}
              >
                <img src={downIcon} alt={`타이머 ${digit.text} 내리기`} />
              </button>
            )}
          </div>
          {idx < digitData.length - 1 && (
            <Text size="size80" color="black" aria-hidden>
              :
            </Text>
          )}
        </Fragment>
      ))}
    </div>
  );
}

const digitStyle = css`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default TimerDigits;
