import { textTable, TextType } from '@style/variables';
import { css } from '@emotion/react';

type EmojiProps = {
  emoji: string;
  size?: TextType;
  label?: string;
  hidden?: boolean;
  shadow?: boolean;
};

function Emoji({
  emoji,
  label,
  size = 'size16',
  hidden = false,
  shadow = false,
}: EmojiProps) {
  return (
    <span
      role="img"
      css={emojiStyle(size, shadow)}
      aria-label={label ?? emoji}
      aria-hidden={hidden}
    >
      {emoji}
    </span>
  );
}

const emojiStyle = (size: TextType, shadow: boolean) => css`
  font-size: ${textTable[size]};
  ${shadow ? `text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);` : null}
`;

export default Emoji;
