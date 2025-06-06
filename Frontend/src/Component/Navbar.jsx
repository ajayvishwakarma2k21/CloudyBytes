import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white sticky top-0 z-50 p-2 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.jpg" alt="Logo" className="h-15 w-25 mr-2 rounded-2xl object-cover" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
              <Link to="/help" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Help</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          <Link to="/help" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Help</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;