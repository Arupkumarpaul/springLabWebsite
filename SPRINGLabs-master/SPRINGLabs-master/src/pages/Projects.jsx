import React, { useState } from 'react';
import { Search } from 'lucide-react';
import projectsData from "../data/projects.json";
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Search function with priority order
  const searchProjects = (query) => {
    if (!query.trim()) return projectsData.projects;

    const lowerQuery = query.toLowerCase();
    
    return projectsData.projects.filter(project => {
      // Priority 1: Title
      if (project.title.toLowerCase().includes(lowerQuery)) return true;
      
      // Priority 2: Funding Agency
      if (project.fundingAgency.toLowerCase().includes(lowerQuery)) return true;
      
      // Priority 3: Budget
      if (project.budget.toLowerCase().includes(lowerQuery)) return true;
      
      return false;
    });
  };

  // Get filtered projects based on search
  const filteredProjects = searchProjects(searchQuery);

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Research Projects
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Research projects at SPRING Lab, IIT Bhilai, focusing on blockchain security, cryptography, and machine learning applications.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects by title, funding agency, or budget..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="text-center mt-2 text-sm text-secondary">
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects
            .sort((a, b) => a.id - b.id)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              No projects found matching your search criteria.
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary font-medium hover:text-primary/80 transition-colors duration-200"
            >
              Clear search and show all projects
            </button>
          </div>
        )}

        {/* Show message when no projects exist */}
        {projectsData.projects.length === 0 && !searchQuery && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              No projects available at the moment.
            </div>
          </div>
        )}

        {/* Contact Button */}
        <div className="text-center mt-12">
          <p className="text-secondary mb-8">
            To see the all other projects led by Dr. Souradyuti Paul
          </p>
          <a href='https://souradyuti-paul.web.app/projects' target='_blank' className="cursor-pointer px-8 py-3 border border-primary text-primary font-medium rounded-lg">
            Click Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;