import React, { Fragment } from 'react';

import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/Facts';

const sections = () => {
  return (
    <Fragment>
      <About />
      <Home />
      <Service />
      <Facts />
    </Fragment>
  );
};

export default sections;
