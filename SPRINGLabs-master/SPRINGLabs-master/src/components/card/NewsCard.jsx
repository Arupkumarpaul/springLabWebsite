import React, { useState } from 'react';

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 150; // Character limit before showing "Read More"

  const getTypeColor = (type) => {
    const colors = {
      publication: 'bg-blue-100 text-blue-800',
      partnership: 'bg-green-100 text-green-800',
      facility: 'bg-purple-100 text-purple-800',
      event: 'bg-orange-100 text-orange-800',
      grant: 'bg-red-100 text-red-800',
      internship: 'bg-indigo-100 text-indigo-800',
      recruitment: 'bg-pink-100 text-pink-800',
      release: 'bg-teal-100 text-teal-800',
      achievement: 'bg-yellow-100 text-yellow-800',
      research: 'bg-cyan-100 text-cyan-800',
      collaboration: 'bg-emerald-100 text-emerald-800',
      'lab upgrade': 'bg-amber-100 text-amber-800',
      workshop: 'bg-violet-100 text-violet-800',
      conference: 'bg-rose-100 text-rose-800',
      award: 'bg-lime-100 text-lime-800'
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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if description is long enough to need truncation
  const needsTruncation = news.description.length > MAX_LENGTH;
  
  // Get truncated text
  const truncatedText = needsTruncation 
    ? news.description.substring(0, MAX_LENGTH) + '...'
    : news.description;

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary/20 overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        {news.image ? (
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-sm">{news.title}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Badge and Date */}
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

        {/* Summary/Description */}
        <div className="flex-1">
          <p className="text-secondary leading-relaxed">
            {isExpanded ? news.description : truncatedText}
          </p>
          
          {/* Read More/Less Button */}
          {needsTruncation && (
            <button 
              onClick={toggleExpand}
              className="text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-200 mt-2 flex items-center"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;