import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl lg:text-9xl font-bold text-primary mb-4">404</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </div>

      

        </div>
    </section>
  );
};

export default NotFound;