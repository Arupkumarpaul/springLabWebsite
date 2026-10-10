import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, IndianRupee, Building2 } from 'lucide-react';
import projectsData from "../data/projects.json";

const ProjectDetail = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [pathname]);

  const { id } = useParams();
  
  const project = projectsData.projects.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Project Not Found</h2>
          <p className="text-secondary mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center text-primary font-medium hover:text-primary/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const mainImage = project.images[0];
  const galleryImages = project.images.slice(1);

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </div>

        {/* 1. Title */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight">
            {project.title}
          </h1>
        </div>

        {/* 2. Funding Agency, Budget and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Funding Agency */}
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Funding Agency</h3>
              <p className="text-gray-700 text-sm">{project.fundingAgency}</p>
            </div>
          </div>

          {/* Budget */}
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <IndianRupee className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Budget</h3>
              <p className="text-gray-700 text-sm">{project.budget}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Project Duration</h3>
              <p className="text-gray-700 text-sm">{project.startDate} - {project.endDate}</p>
            </div>
          </div>
        </div>

        {/* 3. Main Image */}
        <div className="mb-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={mainImage}
              alt={project.title}
              className="w-full h-64 lg:h-80 object-cover"
            />
          </div>
        </div>
         {/* NEW: 4. Project Content Section */}
        {project.content && project.content.length > 0 && (
          <div className="mb-12">
            {/* <h2 className="text-2xl font-bold text-dark mb-8 pb-2 border-b border-gray-200">
              Project Details
            </h2> */}
            
            {/* <div className="space-y-10">
              {project.content.map((section, index) => (
                <div 
                  key={section.id || index} 
                  className="group scroll-mt-20" 
                  id={`section-${section.id || index}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold mr-3">
                      {index + 1}
                    </div>
                    <h2 className="w-full text-xl font-bold text-dark pb-2 border-b border-gray-300">
                      {section.heading}
                    </h2>
                  </div>
                  
                  {section.subheading && (
                    <h4 className="text-lg font-semibold text-gray-700 mb-3 ml-11">
                      {section.subheading}
                    </h4>
                  )}
                  
                  <div className="ml-11">
                    <div className="text-gray-700 leading-relaxed">
                      {typeof section.description === 'string' ? (
                        section.description.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p>{section.description}</p>
                      )}
                    </div>
                  </div>
                  
                  {index < project.content.length - 1 && (
                    <div className="mt-8 pt-8 border-t border-gray-100 ml-11"></div>
                  )}
                </div>
              ))}
            </div> */}
          </div>
        )}

        {/* 4. Problem Statement */}
        <div className="mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-6 pb-2 border-b border-gray-200">
              Problem Statement
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg">
              {project.problemStatement.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Implementation */}
        <div className="mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-6 pb-2 border-b border-gray-200">
              Implementation Approach
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg">
              {project.implementation.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Gallery */}
        {galleryImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-6 pb-2 border-b border-gray-200">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="group">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                    <img
                      src={image}
                      alt={`${project.title} - Gallery ${index + 2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Information Section */}
        {/* <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Research Impact</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Advanced blockchain security protocols and frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Industry-ready cryptographic solutions for real-world applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Open-source tools and libraries for developers and researchers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Enhanced security standards for financial and healthcare systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Expected Outcomes</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>High-impact peer-reviewed publications in top-tier conferences and journals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Patent filings for novel cryptographic techniques and security protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Technology transfer to industry partners for commercial deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Development of skilled researchers and professionals in cybersecurity</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectDetail;