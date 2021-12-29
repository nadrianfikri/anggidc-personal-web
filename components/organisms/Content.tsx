import Image from 'next/image';
import { ButtonLink, CustomLink } from '../atoms';

export default function Content() {
  return (
    <div id="intro" className="px-10 block md:flex gap-10 relative h-auto md:h-80 pt-10 bg-darker ">
      <section className=" basis-1/4">
        <div className="absolute -top-5 md:-top-[130px] left-0 w-36 md:w-[450px]">
          <Image src="/images/nad-no-bg.png" alt="foto" width={450} height={450} layout="responsive" className="rounded-full bg-midDark md:rounded-none md:bg-transparent" />
        </div>
      </section>
      <section className="flex-1 text-light flex flex-col md:grid  md:grid-rows-3   md:grid-flow-col  gap-4">
        <p className="row-span-3 ml-24 md:ml-0 md:text-left text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla suscipit facere ratione fuga doloribus.</p>
        <hr />
        <p className="col-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta exercitationem, rem perferendis corrupti deleniti iure non esse temporibus voluptatibus quae in itaque fugiat obcaecati.</p>
        <hr />
        <p className="row-span-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, natus.</p>
        <div className="w-max h-max mb-4 p-1 self-end">
          <ButtonLink variants="secondary" href="/">
            Baca yang lain yuk!
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
