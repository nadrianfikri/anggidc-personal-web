import type { NextPage } from 'next';

import Seo from '@/components/Seo';
import Layout from '@/components/Layout';
import { Hero } from '@/components/index';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
