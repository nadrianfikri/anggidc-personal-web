import Link from 'next/link';
import { NavLinks, MobileNav } from '../molecules';
import { useScroll } from '@/hooks/useScroll';

export default function Header() {
  const { scrollY, scrollDirection } = useScroll();
  const onTopScroll = scrollY < 10;

  const styles = {
    active: `visible `,
    hidden: 'invisible -translate-y-[100%] ',
    bottomBordered: 'border-b-2 border-stone-400 border-dashed',
  };

  return (
    <header
      className={`sticky z-10 top-0 w-full bg-light transition-all duration-300 ease-in ${
        scrollDirection === 'down' ? styles.active : styles.hidden
      } `}
    >
      <nav
        className={`py-4 md:py-8 transition-all duration-300 ${
          onTopScroll ? '' : styles.bottomBordered
        }`}
      >
        <ul className="flex items-center justify-between px-10 md:px-20 lg:px-36">
          <li>
            <Link href="/">
              <a className="font-display text-2xl md:text-4xl">ADC</a>
            </Link>
          </li>
          <NavLinks />
          <MobileNav />
        </ul>
      </nav>
    </header>
  );
}
