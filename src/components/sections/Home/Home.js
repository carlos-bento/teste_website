import React from 'react';

import Section from '../../../HOC/Section';
import imageone from '../../../assets/img/imageone.jpg';
import imagetwo from '../../../assets/img/imagetwo.jpg';

const home = () => {
  return (
    <Section id="home">
      <div class="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <img src={imageone} class="img-fluid" alt="imageone" />
          </div>
          <div className="col-lg-6">
            <img src={imagetwo} class="img-fluid" alt="imagemtwo" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
