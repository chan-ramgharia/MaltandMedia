import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-cream-300 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 text-cream-500 mb-6">
              <img 
                src="/Malt and Media Logo Design.png" 
                alt="MaltandMedia Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="mb-6">
              Distilling your brand's essence through strategic digital marketing solutions that create lasting impressions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold text-cream-500 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-secondary-500 group-hover:translate-x-1 transition-transform" />
                    <span className="hover:text-secondary-500 transition-colors">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-cream-500 mb-6">Services</h4>
            <ul className="space-y-3">
              {['Content Creation', 'Digital Marketing', 'Branding & Identity', 'Website Design', 'Strategy & Consulting'].map((item) => (
                <li key={item}>
                  <a href="#services" className="flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-secondary-500 group-hover:translate-x-1 transition-transform" />
                    <span className="hover:text-secondary-500 transition-colors">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-cream-500 mb-6">Contact Us</h4>
            <ul className="space-y-3">
              
              <li>hello@maltandmedia.com</li>
              <li>+91 81689 84395</li>
              <li>Mohali</li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-800 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} MaltandMedia. All rights reserved.</p>
          {/* <div className="flex space-x-6">
            <a href="#" className="hover:text-secondary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary-500 transition-colors">Sitemap</a>
          </div> */}
        </div>
      </div>

      {/* Script to handle form submission to Google Sheets */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // This is a placeholder for Google Sheets API integration
          // In a production environment, you would implement the actual 
          // form submission logic to Google Sheets here
          console.log('Google Sheets API integration would be implemented here');
        `
      }} />
    </footer>
  );
};

export default Footer;