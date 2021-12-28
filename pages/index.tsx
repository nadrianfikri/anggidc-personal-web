import type { NextPage } from 'next';

import Seo from '@/components/Seo';
import Layout from '@/components/Layout';
import { Content, Hero } from '@/components/index';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
        <Content />
      </Layout>
    </>
  );
};

export default Home;
