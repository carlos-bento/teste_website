import React from 'react';

import Section from '../../../HOC/Section';
import cadeiraum from '../../../assets/img/cadeiraum.jpg';
import apartamentoum from '../../../assets/img/apartamentoum.jpg';

const Service = () => {
  return (
    <Section id="services">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h6 className="section-subtitle mr-auto ml-auto">
            Com equipe <span>qualificada e experiente</span>, fábrica própria e
            estrutura sólida, executamos projetos de mobiliário residencial sob
            medida e obras corporativas completas.
          </h6>
        </div>

        <div className="container-fluid">
          <div className="col-lg-6">
            <div
              style={{
                display: 'inline-block',
                transform: 'rotate(-90deg)',
                color: '#520018',
                letterSpacing: '5px',
              }}
            >
              <p>CORPORATIVO</p>
            </div>
            <img src={cadeiraum} class="img-fluid" alt="imageone" />
            <div className="section-subtitle" style={{ textAlign: 'left' }}>
              Cadeiras Office
            </div>
            <div style={{ textAlign: 'right' }}>
              <span class="dot" onclick="currentSlide(1)"></span>
              <span class="dot" onclick="currentSlide(2)"></span>
              <span class="dot" onclick="currentSlide(3)"></span>
            </div>
          </div>

          <div className="col-lg-6 ml-auto">
            <div
              style={{
                display: 'inline-block',
                transform: 'rotate(-90deg)',
                color: '#520018',
                letterSpacing: '5px',
              }}
            >
              <p>RESIDENCIAL</p>
            </div>
            <img src={apartamentoum} class="img-fluid" alt="imageone" />
            <div className="section-subtitle" style={{ textAlign: 'left' }}>
              Apartamentos St. Bueno
            </div>
            <div style={{ textAlign: 'right' }}>
              <span class="dot" onclick="currentSlide(1)"></span>
              <span class="dot" onclick="currentSlide(2)"></span>
              <span class="dot" onclick="currentSlide(3)"></span>
            </div>
          </div>
        </div>
        <br />
      </div>
    </Section>
  );
};

export default Service;
