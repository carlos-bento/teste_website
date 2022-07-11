import React from 'react';

import Section from '../../../HOC/Section';
import ColoredLine from './colorLine';

const about = () => {
  return (
    <Section id="about">
      <div
        className="about-content p-5"
        // style={{ backgroundImage: `url(${})` }}
      >
        <div className="container text-light">
          <div className="row">
            <div className="section-header">
              <div className="col-md-12">
                <div className="section-title">Industria de móveis</div>
                <div className="section-title">
                  <span>experiente e atualizada </span>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="section-header pt-2 pb-3">
                <ColoredLine color="#4A4A4A" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="section-header pt-4 pb-5">
                <div className="section-subtitle">
                  Há mais de <span>15 anos</span> transformando sonhos em
                  realidade.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
