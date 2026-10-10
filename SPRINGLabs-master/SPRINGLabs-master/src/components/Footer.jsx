import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 ">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div>
          <p className="text-gray-700 my-2 text-sm text-center lg:text-right">
Site developed and managed by: <span className="font-semibold">Devansh Shrivastava</span> 
            </p>
        </div>
        <div className="text-center">
          <p className="text-gray-700 text-sm my-2">
            © {new Date().getFullYear()} <span className="font-semibold">SPRING Labs</span>: All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-gray-700 text-sm my-2 text-center lg:text-right">
            The word "SPRING Labs" was conceived by <span className="font-semibold">Dr. Dhiman Saha (CSE, IIT Bhilai)</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;