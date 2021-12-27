import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { CustomLink } from '../atoms';

export default function MobileNav() {
  const links = [
    { href: '/Tentang', label: 'Tentang' },
    { href: '/Blog', label: 'Blog' },
    { href: '/Cerita', label: 'Cerita' },
    { href: '/Frasa', label: 'Frasa' },
    { href: '/Puisi', label: 'Puisi' },
    { href: '/Kontak', label: 'Kontak' },
  ];

  return (
    <Menu as="div" className="md:hidden inline-block font-medium ">
      <Menu.Button className="relative z-20">{({ open }) => <FontAwesomeIcon className="text-darker/80 hover:scale-125 transition-all" icon={open ? faTimes : faStream} />}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-in duration-300"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="transform translate-x-0"
        leaveTo="transform  translate-x-full"
      >
        <Menu.Items as="ul" className="absolute flex flex-col items-center justify-center top-0 right-0 w-3/4 h-screen bg-white/80 rounded-l-2xl shadow-xl gap-8 backdrop-blur-xl">
          <>
            {links.map(({ href, label }) => (
              <Menu.Item as="li" key={href + label}>
                <CustomLink href={href}>{label}</CustomLink>
              </Menu.Item>
            ))}
          </>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
