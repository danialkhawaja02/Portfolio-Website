import React from 'react';
import "./Herosect.css";
import heroimg from './hero.svg'
import {Typewriter} from "react-simple-typewriter";

function Herosect(){
        return (
          <section className="hero-sect">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 flex-cont">
                        <div>
                            <h2 className="hero-text text-lg-left">Hi!</h2>
                            <h3 className="hero-text text-lg-left">
                                I'm ordinary developer who loves {' '}
                                <span className='type-text'>
                                    <Typewriter
                                        words={['Sleep!', 'Code!', 'Repeat!']}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={130}
                                        deleteSpeed={70}
                                        delaySpeed={1500}
                                        />
                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 flex-cont ">
                        <img src={heroimg} alt="hero-img" height="90%" />
                    </div>

                </div>
            </div>
        </section>
        );
}




export default Herosect
