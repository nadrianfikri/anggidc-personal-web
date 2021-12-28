import { CustomLink } from '../atoms';

const links = [
  { href: '/Tentang', label: 'Tentang' },
  { href: '/Blog', label: 'Blog' },
  { href: '/Cerita', label: 'Cerita' },
  { href: '/Frasa', label: 'Frasa' },
  { href: '/Puisi', label: 'Puisi' },
  { href: '/Kontak', label: 'Kontak' },
];

export default function NavLinks() {
  return (
    <ul className="hidden md:flex items-center justify-between space-x-10 font-medium">
      {links.map(({ href, label }) => (
        <li key={`${href}${label}`}>
          <CustomLink href={href}>{label}</CustomLink>
        </li>
      ))}
    </ul>
  );
}