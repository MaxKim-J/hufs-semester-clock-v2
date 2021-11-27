import { HTMLAttributes } from 'react';
import { textStyle } from './styles';
import { TextCommonProps } from './types';

export type TextProps = TextCommonProps & HTMLAttributes<HTMLParagraphElement>;

function Text({ size, weight, color, children, ...props }: TextProps) {
  return (
    <p css={textStyle(size, color, weight)} {...props}>
      {children}
    </p>
  );
}

export default Text;
