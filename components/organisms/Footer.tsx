import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, UnstyledLink } from '../atoms';

type Sosmed = {
  icon: IconDefinition;
  href: string;
};

const sosmed: Array<Sosmed> = [
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/anggidwicantika/',
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/anggidece/',
  },
  {
    icon: faTwitter,
    href: 'https://www.twitter.com/anggidece/',
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  //# ======= handler ========
  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  //# ======= end handler ========

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const email = 'anggidwicantikaa@gmail.com';

  return (
    <footer className="px-10 lg:px-36 md-px-20 text-midDark text-center py-4">
      <Col className="justify-center items-center gap-y-4 border-t border-stone-400 py-10">
        <h1>Reach me out</h1>
        <Row className="gap-4">
          <div className="relative">
            <p
              className={`absolute -top-10 -left-10 w-max bg-midDark text-white p-2 rounded text-sm shadow transition-all duration-300 ease-in  ${
                copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Email tersalin!
            </p>
            <CopyToClipboard text={email} onCopy={handleCopy}>
              <button className="active:text-stone-500  hover:text-darker hover:scale-110 transition-all">
                <FontAwesomeIcon
                  className="active:bg-stone-200"
                  size="2x"
                  icon={faEnvelope}
                />
              </button>
            </CopyToClipboard>
          </div>

          {sosmed.map(({ href, icon }) => (
            <UnstyledLink
              openNewTab
              key={icon + href}
              href={href}
              className="active:text-stone-500 hover:text-darker hover:scale-110 transition-all "
            >
              <FontAwesomeIcon
                className="active:bg-stone-200"
                size="2x"
                icon={icon}
              />
            </UnstyledLink>
          ))}
        </Row>
      </Col>
      <p className="text-xs md:text-sm text-darker">
        ©{getYear()} Anggi Dwi Cantika. All rights reserved.
      </p>
    </footer>
  );
}
