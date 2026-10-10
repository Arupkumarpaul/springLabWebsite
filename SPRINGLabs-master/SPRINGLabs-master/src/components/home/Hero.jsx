import React, { useState } from 'react';
import openPositionsData from '../../data/openPositions.json';
import logo from '../../assets/logo.png';
import ApplyDialog from '../dialog/ApplyDialog';
import Projects from '../../pages/Projects';
import OpenPositions from './OpenPositions';

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  

  // Group positions by role and get unique roles
  const roles = [...new Set(openPositionsData.openPositions.map(pos => pos.role))];
  
  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setIsDialogOpen(true);
  };

 

  return (
    <>
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row: Logo + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src={logo}
                  alt="SPRING Lab"
                  className="w-2/3 h-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-semibold text-primary">
                Security & Privacy for Industries and Governance
              </h1>
              
              <p className="text-base text-justify text-secondary leading-relaxed">
                <span className='text-primary'>SPRING Labs</span>, led by <span className='font-bold'>Dr. Souradyuti Paul</span> is dedicated to pioneering research in blockchain security, cryptography, and machine learning to drive innovation and ensure security solutions for modern industries and governance systems. The focus of the lab activities is as much on theoretical analyses of security solutions as on end-to-end product development with modern security features. 
              </p>
            </div>
          </div>

          {/* Second Row: Open Positions by Role */}
           <OpenPositions
            roles={roles}
            openPositionsData={openPositionsData}
            handleApplyClick={handleApplyClick}
          />
        </div>
      </section>

            <Projects />

      {/* Apply Dialog */}
      <ApplyDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        role={selectedRole}
        positions={openPositionsData.openPositions}
      />
    </>
  );
};

export default Hero;