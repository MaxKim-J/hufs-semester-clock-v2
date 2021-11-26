import { HTMLAttributes } from 'react';
import { textStyle } from './styles';
import { TextCommonProps } from './types';

export type TextProps = TextCommonProps & HTMLAttributes<HTMLParagraphElement>;

function Text({ size, color, children, ...props }: TextProps) {
  return (
    <p css={textStyle(size, color)} {...props}>
      {children}
    </p>
  );
}

export default Text;
