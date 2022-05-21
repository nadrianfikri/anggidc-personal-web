import dynamic from 'next/dynamic';
import { useState } from 'react';

import Seo from '@/components/Seo';

const TextEditor = dynamic(() => import('@/components/TextEditor'), {
  ssr: false,
});

const Dashboard = () => {
  const [value, setValue] = useState('');

  console.log('value', value);

  return (
    <div className="container min-h-screen py-10">
      <Seo title="Dashboard" />
      <TextEditor value={value} onChange={setValue} />
    </div>
  );
};

export default Dashboard;
