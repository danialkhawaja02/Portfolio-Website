import React from 'react';
import './Portfolio.css';
import Project1 from './Project1.png'
import Project2 from './Project2.png'
import Project3 from './Project3.png'

function Portfolio() {
    return (
    <section className="portfolio-sect" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="portfolio-title">Portfolio.</h1>
              <h2 className="portfolio-text">Check out my portfolio to see some of my recent work.</h2>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className='portfolio-card'>
                <div className='portfolio-img'>
                  <img src={Project1} alt="Sign Up Form"/>
                </div>
                <div className='portfolio-content'>
                  <h5>Sign Up Form</h5>
                  <a href='#'>View live demo</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className='portfolio-card'>
                <div className='portfolio-img'>
                  <img src={Project2} alt="Sign Up Form"/>
                </div>
                <div className='portfolio-content'>
                  <h5>Afridi Landing Page</h5>
                  <a href='#'>View live demo</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className='portfolio-card'>
                <div className='portfolio-img'>
                  <img src={Project3} alt="Sign Up Form"/>
                </div>
                <div className='portfolio-content'>
                  <h5>Blocknaium Landing Page</h5>
                  <a href='https://danialkhawaja02.github.io/Project-1---Basic-Custom-Website/'>View live demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio