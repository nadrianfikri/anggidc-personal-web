import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="container bg-slate-500 ">
      <h1 className=" text-white py-10 text-3xl  font-display underline">Hello world!</h1>;
    </div>
  );
};

export default Home;
