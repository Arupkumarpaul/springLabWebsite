import React from 'react';
import { Server, Cpu, HardDrive, Network, Monitor, Database } from 'lucide-react';

const ComputingResources = () => {
  const resources = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'High-Performance Computing Cluster',
      description: 'Our main computing cluster with 256 CPU cores, 2TB RAM, and 100TB storage for large-scale computations.',
      specs: [
        '256 CPU Cores',
        '2TB RAM',
        '100TB Storage',
        'NVIDIA A100 GPUs'
      ]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'GPU Workstations',
      description: 'Dedicated workstations equipped with high-end GPUs for machine learning and deep learning research.',
      specs: [
        'NVIDIA RTX 4090',
        '64GB RAM',
        '2TB SSD',
        'Intel i9 Processors'
      ]
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: 'Storage Systems',
      description: 'High-capacity storage solutions for research data, backups, and archival purposes.',
      specs: [
        '500TB NAS Storage',
        'RAID Configuration',
        'Automated Backups',
        'Fast Data Transfer'
      ]
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Networking Infrastructure',
      description: 'High-speed network infrastructure with secure access and reliable connectivity.',
      specs: [
        '10Gbps Ethernet',
        'Secure VPN Access',
        'Dedicated Research Network',
        'Redundant Connections'
      ]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Development Workstations',
      description: 'Standard development machines for daily research activities and software development.',
      specs: [
        '16-32GB RAM',
        '1TB SSD',
        'Multiple Monitor Support',
        'Development Tools Pre-installed'
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database Servers',
      description: 'Dedicated database servers for research data management and analysis.',
      specs: [
        'PostgreSQL & MySQL',
        '128GB RAM',
        '50TB Storage',
        'High Availability Setup'
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Computing Resources
          </h2>
          {/* <p className="text-lg text-secondary max-w-2xl mx-auto">
            State-of-the-art computing infrastructure supporting our research in blockchain, cryptography, and machine learning.
          </p> */}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              {/* Icon */}
              <div className="text-primary mb-4">
                {resource.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-dark mb-3">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-secondary leading-relaxed mb-4">
                {resource.description}
              </p>

              {/* Specifications */}
              <div className="space-y-2">
                {resource.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex items-center text-sm text-secondary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-dark mb-3">
              Access Information
            </h3>
            <p className="text-secondary mb-4">
              Lab members can access these resources through our internal network. 
              For external collaborators, please contact the lab administrator for access procedures.
            </p>
            <div className="text-sm text-secondary">
              <strong>Support:</strong> For technical support and resource allocation, contact the lab system administrator.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputingResources;