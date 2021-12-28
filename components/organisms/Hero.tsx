import Image from 'next/image';
import React from 'react';
import { ButtonLink, Row } from '../atoms';

export default function Hero() {
  return (
    <div className="wrapper py-20 ">
      <Row className="items-center justify-center gap-y-6 md:gap-24 flex-wrap">
        <div className="md:basis-1/3">
          <Image src="/images/people.png" width={270} height={300} alt="img" />
        </div>
        <div className="md:basis-1/2 leading-8">
          <p>
            Selamat datang di blog Anggi Dece! Blog ini berisi <strong>informasi</strong> tentang Anggi dan <strong>tulisan-tulisannya</strong> tentang apapun. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt earum sed in
            fuga necessitatibus qui ut? Minus nisi eum distinctio alias temporibus beatae
          </p>
          <ButtonLink variants="secondary" href="/Blog" className="uppercase mt-10">
            Masuk ke Blog
          </ButtonLink>
        </div>
      </Row>
    </div>
  );
}
