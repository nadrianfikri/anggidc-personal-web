import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Image from 'next/image';
import { CustomLink, Row, UnstyledLink } from '.';
type CardProps = {
  href: string;
  className?: string;
  image?: string;
  title?: string;
  desc?: string;
};

export default function Card({ href, image = '', title, desc, className }: CardProps) {
  return (
    <UnstyledLink href={href} className={clsx('relative md:w-auto space-y-4 hover:scale-[102%] transition-all duration-100', className)}>
      <section className="aspect-video object-cover">
        <Image className="object-cover" src={image} width="720" height="480" layout="responsive" alt="card-image" />
      </section>
      <section className="md:text-base  space-y-2 md:space-y-4">
        <h1 className="font-display text-sm md:text-2xl font-bold">{title}</h1>
        <p className="line-clamp-3 text-[10px] md:text-sm text-midDark">{desc}</p>
        <Row className="justify-between  md:text-sm">
          <p className="font-medium ">Desember 31, 2021</p>
          <p>
            210 <FontAwesomeIcon icon={faHeart} />
          </p>
        </Row>
      </section>
    </UnstyledLink>
  );
}
