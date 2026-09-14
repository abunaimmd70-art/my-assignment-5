import { useState } from 'react';
import logo from '/logo-text.png';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const brandGradient = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile: Hamburger Button (Left on small screens) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Imported Logo Image */}
          <div className="flex items-center cursor-pointer">
            <img 
              src={logo} 
              alt="Dev Stack" 
              className="h-8 w-auto object-contain" 
            />
          </div>

          {/* Desktop Nav Links (Center) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-pink-600 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
            <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1.5 transition-colors">
              Sign In
            </button>
            <button className={`text-sm font-semibold text-white px-5 py-2 rounded-full shadow-sm hover:shadow hover:opacity-95 transition-all ${brandGradient}`}>
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600">Home</a>
          <a href="#technologies" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600">Technologies</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600">Contact</a>
        </div>
      )}
    </header>
  );
}
