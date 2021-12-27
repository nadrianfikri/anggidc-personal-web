import Link from 'next/link';
import { NavLinks, MobileNav } from '../molecules';

export default function Nav() {
  return (
    <nav className="py-8 border-b-2 border-stone-400 border-dashed">
      <ul className="flex items-center justify-between px-10 md:px-20 lg:px-36">
        <li>
          <Link href="/">
            <a className="font-display text-4xl">ADC</a>
          </Link>
        </li>
        <ul className="hidden md:flex items-center justify-between space-x-10 font-medium">
          <NavLinks />
        </ul>
        <MobileNav />
      </ul>
    </nav>
  );
}
