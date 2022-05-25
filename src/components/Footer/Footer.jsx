import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <section className="footer-sect">
          <div className="container">
            <div className="row">
              <div className="col-12 flex-cont ">
                <div>
                  <a href="https://github.com/danialkhawaja02">
                    <FontAwesomeIcon icon={faGithub} className="social-icons"></FontAwesomeIcon>
                  </a>
                  <a href="https://www.linkedin.com/in/danialsohail02/">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icons"></FontAwesomeIcon>
                  </a>
                  <a href="https://www.instagram.com/danialkhawaja02">
                    <FontAwesomeIcon icon={faInstagramSquare} className="social-icons"></FontAwesomeIcon>
                  </a> 
                  <p>© 2022 - Danial Sohail</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Footer