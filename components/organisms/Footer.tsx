import { faInstagram, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, UnstyledLink } from '../atoms';

export default function Footer() {
  type Sosmed = {
    icon: IconDefinition;
    href: string;
  };
  const sosmed: Array<Sosmed> = [
    {
      icon: faEnvelope,
      href: '/',
    },
    {
      icon: faLinkedin,
      href: '/',
    },
    {
      icon: faInstagram,
      href: '/',
    },
    {
      icon: faTwitter,
      href: '/',
    },
  ];

  return (
    <footer className="px-10 lg:px-36 md-px-20 text-midDark text-center py-4">
      <Col className="justify-center items-center gap-y-4 border-t border-stone-400 py-10">
        <h1>Reach me out</h1>
        <Row className="gap-4">
          {sosmed.map(({ href, icon }) => (
            <UnstyledLink openNewTab key={icon + href} href={href} className=" hover:text-darker hover:scale-110 transition-all ">
              <FontAwesomeIcon size="2x" icon={icon} />
            </UnstyledLink>
          ))}
        </Row>
      </Col>
      <p className="text-xs md:text-sm text-darker">©2022 Anggi Dwi Cantika. All rights reserved.</p>
    </footer>
  );
}
