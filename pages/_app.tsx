import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-quill/dist/quill.snow.css';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout><Component {...pageProps} /></Layout>
    )
}

export default MyApp;
