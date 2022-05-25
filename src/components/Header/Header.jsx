import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header_navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <a className="navbar-brand" href="index">
                    <h2>Portfolio</h2>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul id="nav" className="navbar-nav ml-auto text-center">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#home">Home
                          <span />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">About
                          <span />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#portfolio">Portfolio
                          <span />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">Contact
                          <span />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Header