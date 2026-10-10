import React from 'react';
import { ExternalLink } from 'lucide-react';
// import AbuSir from '../assets/people/AbuSir.jpeg';
import dummy from "../assets/dummy.png"
const PeopleAlumini = () => {
  const peopleData =  [
      {
        id: 1,
        name: 'Bhakti Dhorajiya',
        designation: 'M.Tech(Thesis) Student',
        duration: '2024 - 25',
        topic: 'On secure E- voting',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQF4_JYTofX2GA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720455874897?e=1764201600&v=beta&t=P_i9aOwP8jFPy8IjjAWJrMJ2VDfoseFQECjmIwXdsUk',
        profileLink: 'https://www.linkedin.com/in/bhakti-dhorajiya-291216201/',
        email: 'bhaktikdhorajiya@gmail.com'
      },
      
       {
        id: 2,
        name: 'Abhishek Neogi',
        designation: 'Intern',
        duration: '2024 - 25',
        topic: 'Blockchain Applications',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHzspQPs6FoaA/profile-displayphoto-scale_400_400/B4DZqltwbhIMAg-/0/1763716828811?e=1765411200&v=beta&t=gzEdsY47WLcyzv-d599ZqbrO-EnZSDMwKYpW2ZgoKuo',
        profileLink: 'https://www.linkedin.com/in/abhishek-neogi-472783228/',
        email: 'work.abhishek0908@gmail.com'
      },
    ]
   


  const PeopleCard = ({ person }) => (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-6 ">
      <div className="flex flex-col items-center gap-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={person.image}
            alt={person.name}
            className="w-60 h-60 rounded-full object-cover border-2 border-gray-100"
          />
        </div>
        
        {/* Details */}
        <div className="flex-1 flex flex-col items-center min-w-0">
          <div className="flex flex-col items-center text-center">
            <a 
              href={person.profileLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-lg font-semibold text-dark hover:text-primary transition-colors duration-200"
            >
              {person.name}
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="text-primary font-medium text-sm">
              {person.designation}
            </p>
          </div>
          
          <div className="space-y-1 flex flex-col items-center ">
            <div className="text-sm text-secondary">
              ({person.duration})
            </div>
            <div className="text-sm text-center text-secondary">
              <span className="font-medium">Topic:</span> {person.topic}
            </div>
            <div className="text-sm leading-3">
              <a 
                href={`mailto:${person.email}`}
                className="text-primary "
              >
                {person.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">
            Alumni
          </h1>
          {/* <p className="text-lg text-secondary max-w-2xl mx-auto">
            Meet our dedicated team of researchers, students, and staffs.
          </p> */}
        </div>

        {/* People Sections */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"> 
          <div className="mb-12">   
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {peopleData.map((person) => (
                <PeopleCard key={person.id} person={person} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleAlumini;