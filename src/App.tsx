import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OurStory from './components/OurStory';

function App() {
  return (
    <div className="min-h-screen bg-cream-500">
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <OurStory />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;