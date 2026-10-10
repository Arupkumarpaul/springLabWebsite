import React from 'react';

const OpenPositions = ({ roles, openPositionsData, handleApplyClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-dark mb-4">Open Positions</h3>
      <div className="space-y-3">
        {roles.map((role) => {
          const positions = openPositionsData.openPositions.filter(pos => pos.role === role);
          const positionCount = positions.length;
          
          return (
            <div key={role} className="border border-gray-200 pb-3 rounded-lg px-4 pt-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                {/* <div>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-green-100 text-green-800">
                    {positionCount} {role} Position{positionCount > 1 ? 's' : ''} Available
                  </span>
                </div> */}
                <span className="text-xs text-secondary">
                  Applications are accepted throughout the year 
                </span>
              </div>
              <h4 className="text-dark mb-1">{role} Research Positions <span className="text-sm text-secondary">
                  (Blockchain / AI / ML / Privacy / Security)
                </span> </h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-secondary">
                  {positionCount} topic{positionCount > 1 ? 's' : ''} available
                  
               
                </span>
                <button 
                  onClick={() => handleApplyClick(role)}
                  className="text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Apply Now →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpenPositions;