import React, { useState } from 'react';

import Link from '../Link/Link';
import { ReactComponent as ReactLogo } from './logoHeader.svg';

const Nav = () => {
  const [navClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-md border ${navClass}`}>
        <div className="container">
          <a className="navbar-brand" href="!#">
            <ReactLogo />
          </a>
          <div
            className={`navbar-toggler nav-icon ${(() => {
              if (toggeledNav) return 'open';
              return '';
            })()}`}
            onClick={toggleNav}
          >
            <span />
            <span />
            <span />
          </div>

          <div
            className={`collapse navbar-collapse ${(() => {
              if (toggeledNav) return 'show';
              return '';
            })()}`}
          >
            <ul className="navbar-nav ml-auto">
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="d-flex pt-2 pb-2">
                    <div className="d-flex align-item-center mr-5">
                      <i className="fas fa-phone-alt mr-2" />
                      <div className="nav-phone">+55 (62) 3222-3222</div>
                    </div>

                    <div className="d-flex align-item-center mr-5">
                      <i className="fab fa-whatsapp mr-2" />
                      <div className="nav-phone">+55 (62) 99981-9081</div>
                    </div>
                  </div>

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
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <nav className={`navbar navbar-expand-md ${navClass}`}>
            <div
              className={`collapse navbar-collapse ${(() => {
                if (toggeledNav) return 'show';
                return '';
              })()}`}
            >
              <li className="navbar-nav col-md-3">
                <Link target="nav" classes="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-nav col-md-3">
                <Link target="about" classes="nav-link">
                  Sobre
                </Link>
              </li>
              <li className="navbar-nav col-md-5">
                <Link target="home" classes="nav-link">
                  Ambientes corporativos
                </Link>
              </li>
              <li className="navbar-nav col-md-5">
                <Link target="home" classes="nav-link">
                  Ambientes residenciais
                </Link>
              </li>
              <li className="navbar-nav col-md-3">
                <Link target="news" classes="nav-link">
                  Novidades
                </Link>
              </li>
              <li className="navbar-nav col-md-3">
                <Link target="contact" classes="nav-link">
                  Contato
                </Link>
              </li>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
