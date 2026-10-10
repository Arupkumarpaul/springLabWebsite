import React from 'react';

const CollaborationNetwork = () => {
  const partners = [
    {
      id: 1,
      name: 'Google Research',
      logo: '/partners/google-research.png',
      type: 'Industry'
    },
    {
      id: 2,
      name: 'MIT CSAIL',
      logo: '/partners/mit-csail.png',
      type: 'Academic'
    },
    {
      id: 3,
      name: 'Microsoft Research',
      logo: '/partners/microsoft-research.png',
      type: 'Industry'
    },
    {
      id: 4,
      name: 'Stanford University',
      logo: '/partners/stanford.png',
      type: 'Academic'
    },
    {
      id: 5,
      name: 'IBM Research',
      logo: '/partners/ibm-research.png',
      type: 'Industry'
    },
    {
      id: 6,
      name: 'Carnegie Mellon University',
      logo: '/partners/cmu.png',
      type: 'Academic'
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-2xl font-semibold text-dark mb-4">
            Partners & Collaborators
          </h2>
          <p className="text-base text-secondary max-w-2xl mx-auto">
            We work with leading academic institutions and industry partners to advance research in computing and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-xs text-gray-500 text-center">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationNetwork;