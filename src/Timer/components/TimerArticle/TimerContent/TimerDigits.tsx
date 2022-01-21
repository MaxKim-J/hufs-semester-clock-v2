import { Fragment } from 'react';
import { css } from '@emotion/react';
import upIcon from '@shared/images/up.svg';
import {
  getHoursFromMs,
  getMinutesFromMs,
  getSecondsFromMs,
} from '@shared/utils/timeHelper';
import { Text } from '@components/fundamentals/Text';
import { formatDigits } from '@shared/utils/formatHelper';
import downIcon from '@shared/images/down.svg';

type DigitType = 'hours' | 'minutes' | 'seconds';
type ActionType = 'increase' | 'decrease';
type DigitTable = { [key in DigitType]: number };

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

const table: DigitTable = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
};

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
  const currentDigits: DigitTable = {
    hours: getHoursFromMs(targetMs),
    minutes: getMinutesFromMs(targetMs),
    seconds: getSecondsFromMs(targetMs),
  };

  const getTargetMsOperand = (digit: DigitType, action: ActionType) => {
    if (action === 'decrease' && currentDigits[digit] === 0) {
      return table[digit] * (digit === 'hours' ? 23 : 59);
    }
    return table[digit] * (action === 'increase' ? 1 : -1);
  };

  const modifyTargetMs = (type: DigitType, actions: ActionType) => {
    operateTargetMs(getTargetMsOperand(type, actions));
  };

  return (
    <div css={digitWrapperStyle}>
      {digitData.map((digit, idx) => (
        <Fragment key={digit.id}>
          <div css={digitStyle}>
            {!isTimerOn && (
              <button
                css={buttonStyle}
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
                css={buttonStyle}
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

const digitWrapperStyle = css`
  display: flex;
  align-items: center;
`;

const digitStyle = css`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const buttonStyle = css`
  height: 2rem;
`;

export default TimerDigits;
