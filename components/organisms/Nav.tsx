import Link from 'next/link';
import NavLinks from '../molecules/NavLinks';
import MobileNav from '../molecules/MobileNav';

export default function Nav() {
  return (
    <nav className="py-8 border-b-2 border-stone-400 border-dashed text-darker">
      <ul className="flex  items-center justify-between px-10 md:px-20 lg:px-36">
        <li>
          <Link href="/">
            <a className="font-display text-4xl">ADC</a>
          </Link>
        </li>
        <ul className="hidden md:flex items-center justify-between space-x-10 font-semibold">
          <NavLinks />
        </ul>
        <MobileNav />
      </ul>
    </nav>
  );
}
