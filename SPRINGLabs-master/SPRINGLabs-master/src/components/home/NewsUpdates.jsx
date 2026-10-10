import React from 'react';

const NewsUpdates = () => {
  const newsData = [
    {
      id: 1,
      title: 'Breakthrough in Quantum Computing Research',
      description: 'Our team has made significant progress in quantum algorithm development, published in Nature Communications.',
      date: '2024-01-15',
      category: 'Research',
      type: 'publication'
    },
    {
      id: 2,
      title: 'New Collaborative Project with MIT',
      description: 'We are excited to announce a new collaborative research project focusing on advanced nanomaterials.',
      date: '2024-01-12',
      category: 'Collaboration',
      type: 'partnership'
    },
    {
      id: 3,
      title: 'Lab Equipment Upgrade Complete',
      description: 'Successfully installed new electron microscopy equipment to enhance our research capabilities.',
      date: '2024-01-08',
      category: 'Infrastructure',
      type: 'facility'
    },
    {
      id: 4,
      title: 'International Conference Presentation',
      description: 'Our researchers presented groundbreaking work at the International Materials Science Conference.',
      date: '2024-01-05',
      category: 'Event',
      type: 'conference'
    },
    {
      id: 5,
      title: 'Research Grant Awarded',
      description: 'Received $1.2M grant from National Science Foundation for sustainable materials research.',
      date: '2024-01-02',
      category: 'Funding',
      type: 'grant'
    },
    {
      id: 6,
      title: 'Summer Internship Program Launched',
      description: 'Applications are now open for our summer research internship program for undergraduate students.',
      date: '2023-12-28',
      category: 'Program',
      type: 'internship'
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      publication: 'bg-blue-100 text-blue-800',
      partnership: 'bg-green-100 text-green-800',
      facility: 'bg-purple-100 text-purple-800',
      conference: 'bg-orange-100 text-orange-800',
      grant: 'bg-red-100 text-red-800',
      internship: 'bg-indigo-100 text-indigo-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            News & Updates
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and activities from our research laboratory.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div 
              key={news.id}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getTypeColor(news.type)}`}>
                    {news.category}
                  </span>
                  <span className="text-sm text-secondary">
                    {formatDate(news.date)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-dark mb-3 leading-tight">
                  {news.title}
                </h3>

                {/* Description */}
                <p className="text-secondary leading-relaxed">
                  {news.description}
                </p>

                {/* Read More Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="cursor-pointer px-8 py-3 border border-primary text-primary font-medium rounded-lg ">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;