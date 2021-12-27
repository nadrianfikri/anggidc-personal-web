import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function Tentang() {
  return (
    <>
      <Seo title="Tentang Anggi Dece" />
      <Layout>
        <div className="min-h-screen bg-emerald-200 fb text-3xl flex flex-col justify-center items-center">
          ini halaman about
          <Link href="/">
            <a>Ke Home</a>
          </Link>
        </div>
      </Layout>
    </>
  );
}
