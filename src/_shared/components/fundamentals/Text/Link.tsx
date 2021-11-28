import { AnchorHTMLAttributes } from 'react';
import { textStyle } from './styles';
import { TextCommonProps } from './types';

export type LinkProps = {
  href: string;
} & TextCommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({ href, size, color, weight, children, ...props }: LinkProps) {
  return (
    <a css={textStyle(size, color, weight)} href={href} {...props}>
      {children}
    </a>
  );
}

export default Link;
