import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const HomePage = () => {
  React.useEffect(() => {
    // Enable smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <div id="about"><AboutUs /></div>
        <div id="services"><Services /></div>
        <div id="team"><Team /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
};

export default HomePage;
