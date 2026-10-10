import React, { useState } from 'react';
import { Search, ExternalLink, Download } from 'lucide-react';

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const publicationsData = [
    {
      id: 1,
      title: 'A Novel Blockchain-based Secure Voting System with Enhanced Privacy',
      authors: 'Sharma, P., Chen, S., Rodriguez, M., & Paul, S.',
      journal: 'IEEE Transactions on Information Forensics and Security',
      year: 2024,
      category: 'Blockchain',
      status: 'published',
      doi: 'https://doi.org/10.1109/TIFS.2024.1234567',
      pdf: '/papers/blockchain_voting_2024.pdf',
      abstract: 'This paper presents a novel blockchain-based voting system that ensures transparency while maintaining voter privacy through advanced cryptographic techniques.'
    },
    {
      id: 2,
      title: 'Post-Quantum Cryptography: Implementation and Performance Analysis',
      authors: 'Kim, D., Wilson, R., & Paul, S.',
      journal: 'ACM Transactions on Privacy and Security',
      year: 2024,
      category: 'Cryptography',
      status: 'published',
      doi: 'https://doi.org/10.1145/1234567.1234568',
      pdf: '/papers/post_quantum_2024.pdf',
      abstract: 'Comprehensive analysis of post-quantum cryptographic algorithms with performance benchmarks and implementation guidelines for real-world applications.'
    },
    {
      id: 3,
      title: 'Federated Learning for Healthcare: Privacy-Preserving Medical Data Analysis',
      authors: 'Johnson, A., Zhang, W., Petrova, E., & Chen, S.',
      journal: 'Nature Machine Intelligence',
      year: 2023,
      category: 'Machine Learning',
      status: 'published',
      doi: 'https://doi.org/10.1038/s42256-023-00715-4',
      pdf: '/papers/federated_healthcare_2023.pdf',
      abstract: 'A framework for federated learning in healthcare that enables collaborative model training without sharing sensitive patient data across institutions.'
    },
    {
      id: 4,
      title: 'Lightweight Cryptography for Resource-Constrained IoT Devices',
      authors: 'Wilson, R., Halder, G., & Paul, S.',
      journal: 'IEEE Internet of Things Journal',
      year: 2023,
      category: 'Cryptography',
      status: 'published',
      doi: 'https://doi.org/10.1109/JIOT.2023.1234567',
      pdf: '/papers/lightweight_crypto_2023.pdf',
      abstract: 'Design and evaluation of energy-efficient cryptographic protocols optimized for IoT devices with limited computational resources and power constraints.'
    },
    {
      id: 5,
      title: 'Smart Contract Vulnerability Detection Using Deep Learning',
      authors: 'Garg, P., Talha, A., & Chen, S.',
      journal: 'Computers & Security',
      year: 2023,
      category: 'Blockchain',
      status: 'published',
      doi: 'https://doi.org/10.1016/j.cose.2023.103456',
      pdf: '/papers/smart_contract_detection_2023.pdf',
      abstract: 'Deep learning approach for automated detection of vulnerabilities in smart contracts, improving security analysis efficiency and accuracy.'
    },
    {
      id: 6,
      title: 'Differential Privacy in Machine Learning: Theory and Practice',
      authors: 'Rodriguez, M., Sharma, P., & Paul, S.',
      journal: 'Journal of Privacy and Confidentiality',
      year: 2022,
      category: 'Machine Learning',
      status: 'published',
      doi: 'https://doi.org/10.29012/jpc.789',
      pdf: '/papers/differential_privacy_2022.pdf',
      abstract: 'Theoretical foundations and practical implementations of differential privacy in machine learning models, with case studies across various domains.'
    },
    {
      id: 7,
      title: 'Decentralized Identity Management on Blockchain',
      authors: 'Chen, S., Kim, D., & Johnson, A.',
      journal: 'Blockchain: Research and Applications',
      year: 2022,
      category: 'Blockchain',
      status: 'published',
      doi: 'https://doi.org/10.1016/j.bcra.2022.100123',
      pdf: '/papers/decentralized_identity_2022.pdf',
      abstract: 'A self-sovereign identity system using blockchain technology that gives users complete control over their digital identities and personal data.'
    },
    {
      id: 8,
      title: 'Homomorphic Encryption for Secure Cloud Computing',
      authors: 'Paul, S., Wilson, R., & Zhang, W.',
      journal: 'IEEE Security & Privacy',
      year: 2022,
      category: 'Cryptography',
      status: 'published',
      doi: 'https://doi.org/10.1109/MSEC.2022.1234567',
      pdf: '/papers/homomorphic_encryption_2022.pdf',
      abstract: 'Practical implementations of homomorphic encryption schemes enabling secure computation on encrypted data in cloud environments.'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Blockchain': 'bg-purple-100 text-purple-800',
      'Cryptography': 'bg-orange-100 text-orange-800',
      'Machine Learning': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    return status === 'published' 
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  // Search function with priority order
  const searchPublications = (query) => {
    if (!query.trim()) return publicationsData;

    const lowerQuery = query.toLowerCase();
    
    return publicationsData.filter(publication => {
      // Priority 1: Title
      if (publication.title.toLowerCase().includes(lowerQuery)) return true;
      
      // Priority 2: Authors
      if (publication.authors.toLowerCase().includes(lowerQuery)) return true;
      
      // Priority 3: Journal
      if (publication.journal.toLowerCase().includes(lowerQuery)) return true;
      
      // Priority 4: Category
      if (publication.category.toLowerCase().includes(lowerQuery)) return true;
      
      // Priority 5: Year
      if (publication.year.toString().includes(lowerQuery)) return true;
      
      // Priority 6: Abstract
      if (publication.abstract.toLowerCase().includes(lowerQuery)) return true;
      
      return false;
    });
  };

  const filteredPublications = searchPublications(searchQuery).sort((a, b) => b.year - a.year);

  return (
    <section className="w-full bg-white py-16 lg:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Publications
          </h2>
          {/* <p className="text-lg text-secondary max-w-2xl mx-auto">
            Explore our research contributions in blockchain, cryptography, and machine learning through peer-reviewed publications.
          </p> */}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search publications by title, authors, journal, category, year, or abstract..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg "
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
              Found {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredPublications.map((publication) => (
            <div 
              key={publication.id}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="p-6">
                {/* Category and Year Badges */}
                <div className="flex items-center justify-between mb-4">
                  {/* <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(publication.status)}`}>
                      Published
                    </span>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(publication.category)}`}>
                      {publication.category}
                    </span>
                  </div> */}
                  <span className="text-sm text-secondary font-medium">
                    {publication.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-dark mb-3 leading-tight">
                  {publication.title}
                </h3>

                {/* Authors */}
                <p className="text-secondary mb-3">
                  <span className="font-medium">Authors:</span> {publication.authors}
                </p>

                {/* Journal */}
                <p className="text-secondary mb-4">
                  <span className="font-medium">Journal:</span> {publication.journal}
                </p>

                {/* Abstract */}
                {/* <p className="text-secondary leading-relaxed mb-4">
                  {publication.abstract}
                </p> */}

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <a
                      href={publication.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="hidden lg:inline">View DOI</span>
                    </a>
                    <a
                      href={publication.pdf}
                      className="flex items-center space-x-1 text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200"
                    >
                      <Download className="h-4 w-4" />
                      <span className="hidden lg:inline">Download PDF</span>
                    </a>
                  </div>
                  <span className="text-xs text-gray-500">
                    DOI: {publication.doi.split('/').pop()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPublications.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              No publications found matching your search criteria.
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-primary font-medium hover:text-primary/80 transition-colors duration-200"
            >
              Clear search and show all publications
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-secondary">
            <span>Total Publications: {publicationsData.length}</span>
            <span>Blockchain: {publicationsData.filter(p => p.category === 'Blockchain').length}</span>
            <span>Cryptography: {publicationsData.filter(p => p.category === 'Cryptography').length}</span>
            <span>Machine Learning: {publicationsData.filter(p => p.category === 'Machine Learning').length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;