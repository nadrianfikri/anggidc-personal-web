import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-emerald-200 fb text-3xl flex flex-col justify-center items-center">
      ini halaman about
      <Link href="/">
        <a>Ke Home</a>
      </Link>
    </div>
  );
};

export default About;
