import type { NextPage } from 'next';

import Seo from '@/components/Seo';
import { Nav } from '@/components/organisms';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Nav />
    </>
  );
};

export default Home;
