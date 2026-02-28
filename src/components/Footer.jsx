import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Hammer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Hammer className="text-secondary w-6 h-6" />
            <span className="text-xl font-heading font-extrabold tracking-tighter">
              GN <span className="text-secondary">CONSTRUCTIONS</span>
            </span>
          </div>
          <p className="text-gray-400 max-w-xs">
            Professional construction and renovation services tailored to your needs. Quality craftsmanship you can trust.
          </p>
          {/* <div className="text-sm font-semibold text-secondary">
            RBQ Number: 1234-5678-90
          </div> */}
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold border-l-4 border-secondary pl-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold border-l-4 border-secondary pl-3">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 text-gray-400">
              <Phone size={20} className="text-secondary shrink-0" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-400">
              <Mail size={20} className="text-secondary shrink-0" />
              <span>info@gnconstructions.ca</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-400">
              <MapPin size={20} className="text-secondary shrink-0" />
              <span>123 Construction Way, Quebec, QC</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} GN Constructions. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built for excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
