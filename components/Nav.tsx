import Link, { LinkProps } from 'next/link';
// export type UnstyledLinkProps = {
//     href: string;
//     children: React.ReactNode;
//     openNewTab?: boolean;
//     className?: string;
//   } & React.ComponentPropsWithoutRef<'a'> &
//     LinkProps;

// import UnstyledLink from './Common/Links/UnstyledLink';

const links = [
  { href: '/', label: 'Route' },
  { href: '/About', label: 'About' },
];

export default function Nav() {
  return (
    <nav className="bg-gray-700">
      <ul className="flex items-center justify-between px-8 py-4">
        <li>
          <Link href="/">
            <a className="font-bold text-green-400">Home</a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
