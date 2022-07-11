import React, { Fragment } from 'react';

import Footer from '../UI/Footer/Footer';
import Sections from '../sections/Sections';
import Nav from '../UI/Nav/Nav';

const Layout = () => {
  return (
    <Fragment>
      <Nav />
      <main>
        <Sections />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
