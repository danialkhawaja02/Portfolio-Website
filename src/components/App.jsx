import React from 'react';
import Header from './Header/Header';
import Herosect from './Herosect/Herosect';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
    return (
    <div>
        <Header />
        <Herosect />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
);
}

export default App;
