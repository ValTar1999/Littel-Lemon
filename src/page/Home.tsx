import React from 'react';
import NavMenu from '../components/NavMenu';
import Header from '../components/Header';
import About from '../components/About';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
      <div>
        <NavMenu />
        <Header />
        <About />
        <Testimonials />
        <Menu />
        <Footer />
      </div>
  );
}

export default Home;
