import Image from 'next/image';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonLink, Row, UnstyledLink } from '../atoms';

export default function Hero() {
  return (
    <div className="wrapper py-10 md:py-20  space-y-10 md:space-y-24">
      <Row className="items-center justify-between flex-wrap">
        <div className="md:basis-[57%] leading-8">
          <h2 className="text-2xl">Hi!</h2>
          <h1 className="font-bold text-[32px] mb-4">
            Kamu bisa memanggilku <span className="">Anggi</span>
          </h1>
          <p>
            Aku senang menulis atau apapun tentang literasi bahasa terutama
            <strong> Bahasa Indonesia</strong> dan website ini akan berisi
            tulisan-tulisanku atau bisa juga tentang perkembangan belajarku.{' '}
            <br /> Jadi, selamat datang!
          </p>
          {/* <ButtonLink
            variants="secondary"
            href="/Blog"
            className="uppercase mt-10 text-center w-full md:w-auto "
          >
            Masuk ke Blog
          </ButtonLink> */}
        </div>
        <div className=" md:basis-1/3  md:block hidden">
          <Image src="/images/people.png" width={270} height={300} alt="img" />
        </div>
      </Row>
      <section className="flex items-center justify-center">
        <UnstyledLink href="#intro">
          <FontAwesomeIcon
            icon={faArrowDown}
            size="2x"
            className="animate-bounce text-black"
          />
        </UnstyledLink>
      </section>
    </div>
  );
}
