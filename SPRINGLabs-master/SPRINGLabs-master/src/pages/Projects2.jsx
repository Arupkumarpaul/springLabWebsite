import React from 'react';

const Projects2 = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Secure Blockchain-based Voting System',
      description: 'Developing a transparent and tamper-proof voting system using blockchain technology to ensure election integrity and prevent fraud in digital voting processes.',
      duration: '2024 - Present',
      fundingAgency: 'National Science Foundation',
      status: 'ongoing',
      category: 'Blockchain',
      budget: '$500,000',
      teamSize: 8
    },
    {
      id: 2,
      title: 'Post-Quantum Cryptography Implementation',
      description: 'Research and implementation of cryptographic algorithms resistant to quantum computer attacks, focusing on lattice-based and hash-based cryptography schemes.',
      duration: '2023 - 2025',
      fundingAgency: 'Department of Defense',
      status: 'ongoing',
      category: 'Cryptography',
      budget: '$750,000',
      teamSize: 6
    },
    {
      id: 3,
      title: 'AI-Powered Network Intrusion Detection',
      description: 'Developing machine learning models for real-time network intrusion detection using deep learning techniques to identify and prevent cyber threats.',
      duration: '2022 - 2024',
      fundingAgency: 'Cisco Research',
      status: 'completed',
      category: 'Machine Learning',
      budget: '$300,000',
      teamSize: 5
    },
    {
      id: 4,
      title: 'Privacy-Preserving Data Analytics',
      description: 'Creating frameworks for performing data analytics on sensitive information while preserving individual privacy using homomorphic encryption and differential privacy.',
      duration: '2023 - 2024',
      fundingAgency: 'Google Research',
      status: 'completed',
      category: 'Cryptography',
      budget: '$400,000',
      teamSize: 4
    },
    {
      id: 5,
      title: 'Smart Contract Security Analysis',
      description: 'Developing automated tools for detecting vulnerabilities in smart contracts using formal verification and static analysis techniques.',
      duration: '2024 - 2026',
      fundingAgency: 'Ethereum Foundation',
      status: 'ongoing',
      category: 'Blockchain',
      budget: '$600,000',
      teamSize: 7
    },
    {
      id: 6,
      title: 'Federated Learning for Healthcare',
      description: 'Implementing federated learning approaches for medical data analysis while maintaining data privacy across multiple healthcare institutions.',
      duration: '2023 - 2025',
      fundingAgency: 'NIH',
      status: 'ongoing',
      category: 'Machine Learning',
      budget: '$900,000',
      teamSize: 9
    },
    {
      id: 7,
      title: 'Lightweight Cryptography for IoT',
      description: 'Designing and optimizing cryptographic protocols for resource-constrained IoT devices, focusing on energy efficiency and computational overhead.',
      duration: '2022 - 2023',
      fundingAgency: 'Intel Labs',
      status: 'completed',
      category: 'Cryptography',
      budget: '$250,000',
      teamSize: 4
    },
    {
      id: 8,
      title: 'Decentralized Identity Management',
      description: 'Building a self-sovereign identity system using blockchain to give users control over their digital identities and personal data.',
      duration: '2024 - 2026',
      fundingAgency: 'World Wide Web Consortium',
      status: 'ongoing',
      category: 'Blockchain',
      budget: '$550,000',
      teamSize: 6
    }
  ];

  const getStatusColor = (status) => {
    return status === 'ongoing' 
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Blockchain': 'bg-purple-100 text-purple-800',
      'Cryptography': 'bg-orange-100 text-orange-800',
      'Machine Learning': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status) => {
    return status === 'ongoing' ? 'Ongoing' : 'Completed';
  };

  // Sort projects by status (ongoing first) and then by duration
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === 'ongoing' ? -1 : 1;
    }
    return new Date(b.duration.split(' - ')[0]) - new Date(a.duration.split(' - ')[0]);
  });

   return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Research Projects</h2>
        </div>

        <div className="space-y-8">
          {projectsData.map((project) => (
            <div key={project.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                  {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </span>
                <span className="text-sm text-secondary">{project.duration}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-dark mb-2">{project.title}</h3>
              <p className="text-secondary mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-secondary">
                <span className="font-medium">Category: {project.category}</span>
                <span>Funding: {project.fundingAgency}</span>
                <span>Budget: {project.budget}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects2;