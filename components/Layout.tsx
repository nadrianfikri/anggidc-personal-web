import { FunctionComponent } from 'react';
import { Footer, Header } from './organisms';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
