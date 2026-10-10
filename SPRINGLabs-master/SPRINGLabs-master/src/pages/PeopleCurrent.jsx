import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import dummy from "../assets/dummy.png"
import peopleData from '../data/peopleCurrent.json';
import { useLocation } from 'react-router-dom';
const PeopleCurrent = () => {
  const {pathname} = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [pathname]);
  // const peopleData = {
  //   principalInvestigator: [
  //     {
  //       id: 1,
  //       name: 'Dr. Souradyuti Paul',
  //       designation: 'Associate Professor',
  //       duration: '2018 - Present',
  //       topic: 'Blockchain, Cryptography',
  //       image: 'https://media.licdn.com/dms/image/v2/D4D03AQG89NKtOwDj2A/profile-displayphoto-shrink_800_800/B4DZVkVZKTGkAc-/0/1741145086309?e=1764201600&v=beta&t=t4ym0rNTLdMHaH1NwmlGleRX2YgmwwrkJiDt_7Sa7Mo',
  //       profileLink: 'https://souradyutip.github.io/',
  //       email: 'souradyuti@iitbhilai.ac.in'
  //     }
  //   ],
  //   phdStudents: [
  //     {
  //       id: 1,
  //       name: 'Abu Talha',
  //       designation: 'Research Scholar',
  //       duration: 'Aug 2023 - Present',
  //       topic: 'Statistics in A.I. , Deep Generative Modeling',
  //       image: "/people/AbuSir.jpeg",
  //       profileLink: 'https://sites.google.com/view/talhaiiserb/home',
  //       email: 'abut@iibhilai.ac.in'
  //     },
  //     {
  //       id: 2,
  //       name: 'Vijay Shankar Tiwari',
  //       designation: 'Research Scholar',
  //       duration: 'Dec 2024 - Present',
  //       topic: 'TBD',
  //       image: dummy,
  //       profileLink: 'https://www.linkedin.com/in/vijay-shankar-tiwari-5637b1337/',
  //       email: 'vijayst@iitbhilai.ac.in'
  //     },
  //   ],
  //   mtechStudents: [
  //     {
  //       id: 1,
  //       name: 'Goutam Halder',
  //       designation: 'M.Tech Student',
  //       duration: '2025 - Present',
  //       topic: 'Blockchain Technology',
  //       image: dummy,
  //       profileLink: 'https://linkedin.com/in/alexjohnson',
  //       email: 'a.johnson@iitbhilai.ac.in'
  //     },
  //     {
  //       id: 2,
  //       name: 'Prakhar Garg',
  //       designation: 'M.Tech Student',
  //       duration: '2025 - Present',
  //       topic: 'Blockchain Technology',
  //       image: dummy,
  //       profileLink: 'https://linkedin.com/in/weizhang',
  //       email: 'w.zhang@iitbhilai.ac.in'
  //     }
  //   ],
  //   researchAssociates: [
  //     {
  //       id: 1,
  //       name: 'Devansh Shrivastvava',
  //       designation: 'Junior Research Fellow',
  //       duration: 'Nov 2025 - Present',
  //       topic: 'Blockchain Technology, Fintech Security',
  //       image: 'https://devanshs.vercel.app/assets/about-ba1c7e69.jpeg',
  //       profileLink: 'https://linkedin.com/in/robertwilson',
  //       email: 'work.devanshs@gmail.com'
  //     },
  //     {
  //       id: 2,
  //       name: 'Dr. Elena Petrova',
  //       designation: 'Research Associate',
  //       duration: '2023 - Present',
  //       topic: 'Nanofabrication',
  //       image: '/api/placeholder/150/150',
  //       profileLink: 'https://linkedin.com/in/elenapetrova',
  //       email: 'e.petrova@university.edu'
  //     }
  //   ]
  // };

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
            Current Members
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Meet our dedicated team of researchers, students, and staffs.
          </p>
        </div>

        {/* People Sections */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Principal Investigator */}
          <div className="mb-12">
            <h2 className="text-2xl text-center font-bold text-dark mb-6 pb-2 border-b border-gray-200">
              Principal Investigator
            </h2>
            <div className="grid grid-cols-1 gap-6 items-center">
              {peopleData.principalInvestigator.map((person) => (
                <PeopleCard key={person.id} person={person} />
              ))}
            </div>
          </div>
          
          {/* PhD Students */}
          <div className="mb-12">
            <h2 className="text-2xl text-center font-bold text-dark mb-6 pb-2 border-b border-gray-200">
              PhD Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {peopleData.phdStudents.map((person) => (
                <PeopleCard key={person.id} person={person} />
              ))}
            </div>
          </div>
          
          {/* M.Tech Students */}
          <div className="mb-12">
            <h2 className="text-2xl text-center font-bold text-dark mb-6 pb-2 border-b border-gray-200">
              M.Tech(Thesis) Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {peopleData.mtechStudents.map((person) => (
                <PeopleCard key={person.id} person={person} />
              ))}
            </div>
          </div>
          
          {/* Research Associates */}
          <div className="mb-12">
            <h2 className="text-2xl text-center font-bold text-dark mb-6 pb-2 border-b border-gray-200">
              Research Associates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {peopleData.researchAssociates.map((person) => (
                <PeopleCard key={person.id} person={person} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCurrent;