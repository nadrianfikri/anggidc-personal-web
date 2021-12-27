import type { NextPage } from 'next';

import Seo from '@/components/Seo';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <div className="min-h-screen">mainpgae</div>
      </Layout>
    </>
  );
};

export default Home;
