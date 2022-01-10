import { textTable, TextType } from '@style/variables';

type EmojiProps = {
  emoji: string;
  size?: TextType;
  label?: string;
  hidden?: boolean;
};

function Emoji({ emoji, label, size = 'size16', hidden = false }: EmojiProps) {
  return (
    <span
      role="img"
      css={{ fontSize: textTable[size] }}
      aria-label={label}
      aria-hidden={hidden}
    >
      {emoji}
    </span>
  );
}

export default Emoji;
