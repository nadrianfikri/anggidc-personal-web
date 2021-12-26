import Link, { LinkProps } from 'next/link';

const links = [
  { href: '/', label: 'Route' },
  { href: '/About', label: 'About' },
];

export default function Nav() {
  return (
    <nav className="bg-gray-700 text-white ">
      <ul className="flex items-center justify-between px-8 py-4">
        <li>
          <Link href="/">
            <a className=" font-display cursor-ne-resize">ANGGI</a>
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
