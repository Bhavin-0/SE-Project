// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-gray-100 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Products Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-wider hover:text-yellow-500 transition duration-300">PRODUCTS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300 hover:underline">Welding Electrode</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-wider hover:text-yellow-500 transition duration-300">QUICK LINKS</h3>
            <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-300 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-300 hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors duration-300 hover:underline">
                Products
              </Link>
            </li>
          </ul>

          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-wider hover:text-yellow-500 transition duration-300">CONTACT US</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <span className="w-5 h-5 mt-0.5 mr-3">✉️</span>
                <a href="mailto:info@rukminienterprises.com" className="hover:text-white transition-colors duration-300 hover:underline">info@rukminienterprises.com</a>
              </div>
              <div className="flex items-start">
                <span className="w-5 h-5 mt-0.5 mr-3">📍</span>
                <span>
                  98, Ambad - Uttam Nagar Rd, MIDC, Ambad Village, Nashik, Maharashtra 422010
                </span>
              </div>
            </address>

            {/* Socials */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H17.21v-5.569c0-1.327-.025-3.036-1.849-3.036-1.852 0-2.136 1.447-2.136 2.941v5.664H9.098V9h3.104v1.561h.043c.434-.823 1.494-1.692 3.075-1.692 3.289 0 3.894 2.165 3.894 4.981v6.602zM5.337 7.433a1.804 1.804 0 110-3.608 1.804 1.804 0 010 3.608zM6.764 20.452H3.911V9h2.853v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Rukmini Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;