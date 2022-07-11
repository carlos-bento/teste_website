import React from 'react';

import Section from '../../../HOC/Section';
import imagethree from '../../../assets/img/imagethree.jpg';

const Facts = () => {
  return (
    <Section id="facts">
      <div
        className="facts-container"
        style={{ backgroundImage: `url(${imagethree})` }}
      >
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-sm-6 col-md-4 text-center mb-4">
              <h4 className="facts-counter text-light">3.160m²</h4>
              <h5 className="facts-title text-light">Estrutura</h5>
              <h5 className="facts-title text-light">
                Fábrica própria no Distrito industrial de São Paulo
              </h5>
            </div>
            <div className="col-sm-6 col-md-4 text-center mb-4">
              <h4 className="facts-counter text-light">+433</h4>
              <h5 className="facts-title text-light">Projetos executados</h5>
              <h5 className="facts-title text-light">
                em 10 estados nas 5 regiões do Brasil
              </h5>
            </div>
            <div className="col-sm-6 col-md-4 text-center mb-4">
              <h4 className="facts-counter text-light">9</h4>
              <h5 className="facts-title text-light">Especialistas técnicos</h5>
              <h5 className="facts-title text-light">
                entre arquitetos, projetistas, designers e engenheiros de
                produção para pensar e desenvolver produtos
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
