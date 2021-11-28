import { AnchorHTMLAttributes } from 'react';
import { textStyle } from './styles';
import { TextCommonProps } from './types';

export type LinkProps = TextCommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({ size, color, weight, children, ...props }: LinkProps) {
  return (
    <a css={textStyle(size, color, weight)} {...props}>
      {children}
    </a>
  );
}

export default Link;
