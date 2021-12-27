import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavLinks, MobileNav } from '../molecules';

export default function Header() {
  const [onTop, setOnTop] = useState<boolean>(true);
  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <header className="fixed top-0 w-full">
      <nav className={`py-8 transition-all duration-500 ${onTop ? '' : 'border-b-2 border-stone-400 border-dashed'} `}>
        <ul className="flex items-center justify-between px-10 md:px-20 lg:px-36">
          <li>
            <Link href="/">
              <a className="font-display text-4xl">ADC</a>
            </Link>
          </li>
          <NavLinks />
          <MobileNav />
        </ul>
      </nav>
    </header>
  );
}
