import React, 
{ useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream-900/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img 
              src={scrolled ? "/Malt and Media Logo Design.png" : "/Malt and Media Logo Design.png"} 
              alt="MaltandMedia Logo" 
              className="h-12 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <a href="#contact" className="btn-primary">Get in Touch</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-primary-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
        <div className="px-4 pt-2 pb-6 bg-cream-900/95 backdrop-blur-md space-y-3">
          <NavLinksMobile setIsOpen={setIsOpen} />
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center btn-primary mt-4"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <>
    <a href="#services" className="text-primary-900 hover:text-primary-600 font-medium transition-colors">Services</a>
    <a href="#about" className="text-primary-900 hover:text-primary-600 font-medium transition-colors">About</a>
    {/* <a href="#testimonials" className="text-primary-900 hover:text-primary-600 font-medium transition-colors">Testimonials</a> */}
    <a href="#contact" className="text-primary-900 hover:text-primary-600 font-medium transition-colors">Contact</a>
  </>
);

const NavLinksMobile = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => (
  <>
    <a 
      href="#services" 
      onClick={() => setIsOpen(false)}
      className="block py-2 text-primary-900 hover:text-primary-600 font-medium transition-colors"
    >
      Services
    </a>
    <a 
      href="#about" 
      onClick={() => setIsOpen(false)}
      className="block py-2 text-primary-900 hover:text-primary-600 font-medium transition-colors"
    >
      About
    </a>
    <a 
      href="#testimonials" 
      onClick={() => setIsOpen(false)}
      className="block py-2 text-primary-900 hover:text-primary-600 font-medium transition-colors"
    >
      Testimonials
    </a>
    <a 
      href="#contact" 
      onClick={() => setIsOpen(false)}
      className="block py-2 text-primary-900 hover:text-primary-600 font-medium transition-colors"
    >
      Contact
    </a>
  </>
);

export default Navbar;