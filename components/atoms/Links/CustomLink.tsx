import clsx from 'clsx';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export default function CustomLink({ children, className = '', ...rest }: UnstyledLinkProps) {
  return (
    <UnstyledLink {...rest} className={clsx('inline-flex items-center font-bold hover:text-midDark  animated-underline', 'focus:outline-none focus-visible:text-warmPeach transition-all duration-700', className)}>
      {children}
    </UnstyledLink>
  );
}
