import { CustomLink } from '../atoms';

const links = [
  { href: '/tentang', label: 'Tentang' },
  { href: '/blog', label: 'Blog' },
  { href: '/cerita', label: 'Cerita' },
  { href: '/frasa', label: 'Frasa' },
  { href: '/puisi', label: 'Puisi' },
  { href: '/kontak', label: 'Kontak' },
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
