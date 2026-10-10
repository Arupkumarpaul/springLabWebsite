import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl lg:text-7xl font-bold text-primary mb-4">Coming Soon</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="mb-12">
          <p className="text-lg text-secondary leading-relaxed mb-8">
            This section is currently under development and will be available shortly.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </section>
  );
};

export default ComingSoon;