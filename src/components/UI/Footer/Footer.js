import React from 'react';
import { ReactComponent as ReactLogo } from './logoFooter.svg';
import Line from './Line';
import ColoredLine from '../../sections/About/colorLine';
import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className="">
      <div className="col-md-12">
        <div className="section-header pt-2 pb-3">
          <Line color="#520018" />
        </div>
      </div>
      <div className="container text-light pt-5">
        <div className="container">
          <div className="row">
            <nav className={`navbar navbar-expand-md`}>
              <li className="navbar-nav col-md-1" />
              <li className="navbar-nav col-md-6">
                <Link classes="nav-link">Sobre a empresa</Link>
              </li>
              <li className="navbar-nav col-md-6">
                <Link classes="nav-link">Soluções residenciais</Link>
              </li>
              <li className="navbar-nav col-md-6">
                <Link target="home" classes="nav-link">
                  Soluções comerciais
                </Link>
              </li>
              <li className="navbar-nav col-md-6">
                <Link target="home" classes="nav-link">
                  Novidades
                </Link>
              </li>
            </nav>
          </div>
        </div>

        <div className="col-md-12">
          <div className="section-header pt-2 pb-3">
            <ColoredLine color="#4A4A4A" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5">
            <a className="navbar-brand" href="!#">
              <ReactLogo />
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 mb-5">
            <div className="footer-title">
              <h6>Onde Estamos:</h6>
            </div>
            <div className="footer-subtitle">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et.
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>Entre em contato:</h6>
            </div>
            <div className="footer-content">
              <div className="d-flex pt-2 pb-2">
                <div className="d-flex align-item-center mr-3">
                  <i className="fas fa-phone-alt mr-2 text-dark" />
                  <div className="nav-phone">+55 (62) 3222-3222</div>
                </div>
                <div className="d-flex align-item-center mr-3">
                  <i className="fab fa-whatsapp mr-2 text-dark" />
                  <div className="nav-phone">+55 (62) 99981-9081</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div style={{ marginLeft: 10 }}>
              <div className="d-flex pt-2 pb-2">
                <div className="social-media d-flex align-item-center">
                  <a href="!#" className="text-dark">
                    <i className="fab fa-facebook-f mr-2" />
                  </a>
                  <a href="!#" className="text-dark">
                    <i className="fab fa-instagram mr-2" />
                  </a>
                  <a href="!#" className="text-dark">
                    <i className="fab fa-youtube mr-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
