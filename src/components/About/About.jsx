import React from "react";
import './About.css';
import about from './about.svg'
import Tabs from './Tabs'

function About() {
    return (
      <section className="about-sect" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 flex-about">
                        <h2 className="about-title">About.</h2>
                        <img src={about} alt="About" height="60%" />
                </div>
                <div className="col-lg-6 col-md-12 flex-cont flex-column">
                    <Tabs />
                    <a href="https://drive.google.com/file/d/1VHXxjaRx3GsshUtfBLVYyewdSMPPvdJJ/view?usp=sharing">
                      <button type="button" className="btn btn-outline-secondary">Download Resume</button>
                    </a>
                    
                </div>
            </div>
        </div>
      </section>
    );
}

export default About