import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Contact(){
    return (
        <section className="contact-sect" id="contact">
            <div className="container_fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 flex-cont">
                        <div>
                            <h2 className="contact-title">
                            Let's 
                            <span>
                                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </span>
                            Connect.
                            </h2>
                            <p className="contact-text">Have a project? I would love to help you. Share your ideas or requirements becuase together we can build something great.</p>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 flex-cont">
                        <div className="contact-form">
                            <label>Your Name:</label>
                            <input className="input" type="text" />
                            <label>Your Email Address:</label>
                            <input className="input" type="email" />
                            <label>Tell About The Project:</label>
                            <input className="input" type="text" />
                            <input className="input" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}   

export default Contact