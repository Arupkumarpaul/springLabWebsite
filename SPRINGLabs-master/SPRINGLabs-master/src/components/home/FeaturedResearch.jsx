import React from 'react';

const FeaturedResearch = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-dark mb-4">Featured Research</h3>
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-8 bg-primary rounded-full"></div>
          <span className="text-sm font-semibold text-primary">BLOCKCHAIN SECURITY</span>
        </div>
        <h4 className="text-xl font-bold text-dark mb-3">
          Secure Smart Contract Development
        </h4>
        <p className="text-secondary leading-relaxed mb-4">
          Developing novel formal verification techniques to automatically detect and prevent vulnerabilities in smart contracts before deployment.
        </p>
        <div className="flex gap-2">
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Formal Verification</span>
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Security Analysis</span>
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">Blockchain</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedResearch;