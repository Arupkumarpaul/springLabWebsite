import { useState } from "react";
import NewsCard from "../components/card/NewsCard"
import NewsDialog from "../components/dialog/NewsDialog";
import newsData from "../data/newsUpdates.json"
const NewsAndEvents = () => {
    const [selectedNews, setSelectedNews] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const currentYear = new Date().getFullYear();

    const handleCardClick = (news) => {
    setSelectedNews(news);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedNews(null);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            News & Events
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Latest developments, achievements, and activities from our research laboratory.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.news.map((news) => (
            <NewsCard key={news.id} news={news} onCardClick={handleCardClick} />
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-sm text-secondary">
            <span>Total Updates: {newsData.news.length}</span>
            <span>This Year: {newsData.news.filter(item => new Date(item.date).getFullYear() === currentYear).length}</span>
            <span>Last Updated: {formatDate(newsData.news[0]?.date)}</span>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-sm text-secondary">
            <span>For more news & events, stay tuned!</span>
          </div>
        </div>
          {/* <NewsDialog 
          news={selectedNews}
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
        /> */}
      </div>
    </section>
  );
};

export default NewsAndEvents;