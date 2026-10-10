import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'International Conference on Blockchain Research',
      date: '2024-03-15',
      type: 'Conference',
      status: 'upcoming',
      location: 'Virtual'
    },
    {
      id: 2,
      title: 'Cryptography Workshop Series',
      date: '2024-02-20',
      type: 'Workshop',
      status: 'ongoing',
      location: 'Lab Room 101'
    },
    {
      id: 3,
      title: 'PhD Thesis Defense: Secure Voting Systems',
      date: '2024-02-10',
      type: 'Defense',
      status: 'past',
      location: 'Seminar Hall'
    },
    {
      id: 4,
      title: 'Industry Collaboration Meeting',
      date: '2024-01-25',
      type: 'Meeting',
      status: 'past',
      location: 'Conference Room'
    },
    {
      id: 5,
      title: 'Summer Internship Presentations',
      date: '2024-04-05',
      type: 'Presentation',
      status: 'upcoming',
      location: 'Lab Room 101'
    },
    {
      id: 6,
      title: 'Research Paper Submission Deadline',
      date: '2024-02-28',
      type: 'Deadline',
      status: 'ongoing',
      location: '-'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      upcoming: 'bg-blue-100 text-blue-800',
      ongoing: 'bg-green-100 text-green-800',
      past: 'bg-gray-100 text-gray-800'
    };
    return colors[status];
  };

  const getStatusText = (status) => {
    const texts = {
      upcoming: 'Upcoming',
      ongoing: 'Ongoing', 
      past: 'Past'
    };
    return texts[status];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Group events by status
  const groupedEvents = {
    upcoming: events.filter(event => event.status === 'upcoming'),
    ongoing: events.filter(event => event.status === 'ongoing'),
    past: events.filter(event => event.status === 'past')
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Events</h2>
        </div>

        {/* Upcoming Events */}
        {groupedEvents.upcoming.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-dark mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {groupedEvents.upcoming.map(event => (
                <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-dark">{event.title}</h4>
                      <p className="text-sm text-secondary">{event.type} • {event.location}</p>
                    </div>
                    <span className="text-sm text-secondary whitespace-nowrap">
                      {formatDate(event.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ongoing Events */}
        {groupedEvents.ongoing.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-dark mb-6">Ongoing Events</h3>
            <div className="space-y-4">
              {groupedEvents.ongoing.map(event => (
                <div key={event.id} className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-dark">{event.title}</h4>
                      <p className="text-sm text-secondary">{event.type} • {event.location}</p>
                    </div>
                    <span className="text-sm text-secondary whitespace-nowrap">
                      {formatDate(event.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {groupedEvents.past.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-dark mb-6">Past Events</h3>
            <div className="space-y-4">
              {groupedEvents.past.map(event => (
                <div key={event.id} className="border-l-4 border-gray-400 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-dark">{event.title}</h4>
                      <p className="text-sm text-secondary">{event.type} • {event.location}</p>
                    </div>
                    <span className="text-sm text-secondary whitespace-nowrap">
                      {formatDate(event.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;