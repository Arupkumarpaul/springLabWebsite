import React from 'react';

const NewsDialog = ({ news, isOpen, onClose }) => {
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

  if (!isOpen || !news) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image */}
              <div className="w-full h-64 md:h-80 bg-gray-200 overflow-hidden">
                {news.image ? (
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">No Image Available</span>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8">
                {/* Header with Category and Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${getTypeColor(news.type)} self-start`}>
                    {news.category}
                  </span>
                  <span className="text-lg text-secondary font-medium">
                    {formatDate(news.date)}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6 leading-tight">
                  {news.title}
                </h1>

                {/* Description */}
                <div className="prose max-w-none">
                  <p className="text-lg text-secondary leading-relaxed whitespace-pre-line">
                    {news.description}
                  </p>
                  
                  {/* If you have additional content fields in your JSON, you can add them here */}
                  {/* Example:
                  {news.fullContent && (
                    <div className="mt-6 text-secondary leading-relaxed">
                      {news.fullContent}
                    </div>
                  )}
                  */}
                </div>

                {/* Additional Information Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-dark mb-4">Additional Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Category:</span>
                      <span className="ml-2 text-secondary capitalize">{news.category}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Published:</span>
                      <span className="ml-2 text-secondary">{formatDate(news.date)}</span>
                    </div>
                    {news.author && (
                      <div>
                        <span className="font-medium text-gray-900">Author:</span>
                        <span className="ml-2 text-secondary">{news.author}</span>
                      </div>
                    )}
                    {news.tags && news.tags.length > 0 && (
                      <div>
                        <span className="font-medium text-gray-900">Tags:</span>
                        <span className="ml-2 text-secondary">{news.tags.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDialog;