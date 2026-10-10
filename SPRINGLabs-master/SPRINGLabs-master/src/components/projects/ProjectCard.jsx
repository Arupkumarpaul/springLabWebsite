import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const getStatusColor = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;
    
    if (now < start) return 'bg-yellow-100 text-yellow-800 border-yellow-200'; // Upcoming
    if (end && now > end) return 'bg-blue-100 text-blue-800 border-blue-200'; // Completed
    return 'bg-green-100 text-green-800 border-green-200'; // Ongoing
  };

  const getStatusText = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;
    
    if (now < start) return 'Upcoming';
    if (end && now > end) return 'Completed';
    return 'Ongoing';
  };

  // Since we don't have category in the JSON, you can remove this or add it to your data
  const getCategoryColor = (category) => {
    const colors = {
      'Blockchain': 'bg-purple-100 text-purple-800',
      'Cryptography': 'bg-orange-100 text-orange-800',
      'Machine Learning': 'bg-indigo-100 text-indigo-800',
      'Security': 'bg-red-100 text-red-800',
      'Healthcare': 'bg-teal-100 text-teal-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  // Helper to infer category from title (you can remove this if not needed)
  const inferCategory = (title) => {
    if (title.toLowerCase().includes('blockchain')) return 'Blockchain';
    if (title.toLowerCase().includes('cryptographic') || title.toLowerCase().includes('cryptography')) return 'Cryptography';
    if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('machine learning')) return 'Machine Learning';
    if (title.toLowerCase().includes('healthcare') || title.toLowerCase().includes('medical')) return 'Healthcare';
    return 'Security';
  };

  return (
    <div 
      
      className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group h-full flex flex-col"
    >
      {/* Project Image - Using first image from images array */}
      {project.images && project.images.length > 0 && (
        <div className="w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Fallback if no images */}
      {(!project.images || project.images.length === 0) && (
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
          <span className="text-gray-400 text-sm">No image available</span>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Status and Category Badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(project.startDate, project.endDate)}`}>
              {getStatusText(project.startDate, project.endDate)}
            </span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(inferCategory(project.title))}`}>
              {inferCategory(project.title)}
            </span>
          </div>
          <span className="text-sm text-secondary font-medium">
            ({project.startDate} {project.endDate ? `- ${project.endDate}` : 'onwards'})
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-dark mb-3 leading-tight group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        {/* Problem Statement (using problemStatement instead of description) */}
        {/* <p className="text-secondary leading-relaxed mb-4 flex-1">
          {project.problemStatement.length > 120 
            ? `${project.problemStatement.substring(0, 120)}...` 
            : project.problemStatement}
        </p> */}

        {/* Project Details */}
        <div className="space-y-2 text-sm text-secondary mt-auto">
          <div className="flex justify-between">
            <span className="font-medium">Funding Agency:</span>
            <span className="text-right max-w-[60%]">{project.fundingAgency}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Budget:</span>
            <span>{project.budget}</span>
          </div>
        </div>

        {/* View Details CTA */}
        {project.content && <div onClick={() => navigate(`/projects/${project.id}`)}  className="mt-4 pt-4 border-t border-gray-100 cursor-pointer inline-block">
          <span className="text-primary font-medium text-sm group-hover:underline">
            View Project Details →
          </span>
        </div>}
      </div>
    </div>
  );
};

export default ProjectCard;