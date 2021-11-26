import { AnchorHTMLAttributes } from 'react';
import { textStyle } from './styles';
import { TextCommonProps } from './types';

export type LinkProps = {
  href: string;
} & TextCommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({ size, color, children, href, ...props }: LinkProps) {
  return (
    <a href={href} css={textStyle(size, color)} {...props}>
      {children}
    </a>
  );
}

export default Link;
