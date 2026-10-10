import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import { nav } from 'framer-motion/client';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Resources', 
      href: '/resources',
     
    },
     { 
      name: 'People', 
      href: '#people',
      dropdown: [
        { name: 'Current Members', href: '/people/current' },
        { name: 'Alumni', href: '/people/alumni' }
      ]
    },
    { name: 'Publications', href: 'https://souradyuti-paul.web.app/publications', external: true, },
    { name: 'Products', href: '/products' },
    { name: 'News & Events', href: '/news_events' },
    
    { name: 'Contact', href: '/contact' },
  ];

  const handleDropdownToggle = (itemName) => {

    
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMobileLinkClick = (href) => {
    console.log('hello');
    
    navigate(href); 
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-15 h-15  rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">S</span> */}
                <img  src={logo} alt="SPRING Lab Logo" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-dark">SPrInG Labs</h1>
                <p className="text-xs text-secondary hidden sm:block"><b>S</b>ecurity & <b>Pr</b>ivacy for <b>In</b>dustries and <b>G</b>overnance</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/10 border-b-2 border-transparent hover:border-primary flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 animate-fadeIn">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-dark hover:text-primary hover:bg-accent/10 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      target={item.external && '_blank'}
                      className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/10 border-b-2 border-transparent hover:border-primary"
                    >
                      {item.name} {item.external && '↗'}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
            >
              {isOpen ? (
                <X className="block h-6 w-6 animate-rotateIn" />
              ) : (
                <Menu className="block h-6 w-6 animate-rotateIn" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-inner">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="transition-all duration-300 ease-out"
                style={{
                  animationDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.dropdown ? (
                  <div className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="w-full text-left text-dark hover:text-primary px-3 py-3 rounded-md text-base font-medium transition-all duration-200 hover:bg-accent/10 border-l-4 border-transparent hover:border-primary flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeDropdown === item.name ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((dropdownItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={dropdownItem.href}
                            className="block text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/10 border-l-2 border-transparent hover:border-primary transform transition-all duration-300"
                            style={{
                              animationDelay: activeDropdown === item.name ? `${subIndex * 100 + 300}ms` : '0ms'
                            }}
                            onClick={() =>{
                              
                             handleMobileLinkClick(dropdownItem.href)
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    target={item.external && '_blank'}
                    className={`text-dark hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 hover:bg-accent/10 border-l-4 border-transparent hover:border-primary transform transition-all duration-300 ${
                      isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    }`}
                    onClick={() => handleMobileLinkClick(item.href)}
                  >
                    {item.name} {item.external && '↗'}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {/* {activeDropdown && (
        <div 
          className="fixed inset-0 z-20" 
          onClick={() => setActiveDropdown(null)}
        />
      )} */}
    </nav>
  );
};

export default Navbar;