import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

type ButtonLinkProps = {
  variants?: 'primary' | 'secondary';
} & UnstyledLinkProps;

export default function ButtonLink({ children, className = '', variants = 'primary', ...rest }: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'py-1 px-6 inline-block  font-bold  hover:-translate-y-1 animated-underline',
        'border border-gray-600',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-darker text-white': variants === 'primary',
          'bg-white text-darker hover:bg-darker hover:text-cyan-400 focus-visible:text-dark': variants === 'secondary',
        },
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
