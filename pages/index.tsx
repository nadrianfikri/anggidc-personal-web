import type { NextPage } from 'next';

import Seo from '@/components/Seo';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Layout>Main Page</Layout>
    </>
  );
};

export default Home;
