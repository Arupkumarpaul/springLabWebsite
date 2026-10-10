import React, { useState } from 'react';
import { X, ArrowLeft, Copy, Check } from 'lucide-react';

const ApplyDialog = ({ isOpen, onClose, role, positions }) => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  // Get unique topics for the selected role
  const topics = positions.filter(pos => pos.role === role);

  // Position-specific requirements based on ID
  const getPositionRequirements = (positionId) => {
    const requirements = {
      'in2501': [ 
        'Knowledge of blockchain technology and decentralized systems',
        'Good programming skills',
        'Experience with blockchain frameworks',
        'Knowledge of smart contract security and formal verification'
      ],
      'in2502': [ 
        'IIT Bhilai students (2nd / 3rd year) with strong programming skills are encouraged to apply.',
        'Excellent programming skills in Python / PyTorch',
        'Familiarity with ML/DL framework',
        'Sound knowledge of Probability , Statistics, Linear Algebra & Optimization',
        'Strong knowledge of Image Processing, Computer Vision / NLP / Generative Modeling '
      ]
    };
    return requirements[positionId] || getRoleRequirements(role);
  };

  const getRoleRequirements = (role) => {
    const defaultRequirements = {
      'PhD': [
        'Bachelor\'s/Master\'s degree in Computer Science, Mathematics, or related field',
        'Strong programming skills (Python, C++, or Java)',
        'Background in cryptography, blockchain, or machine learning',
        'Research experience or publications (preferred)',
        'Minimum GPA: 8.0/10.0 or equivalent'
      ],
      'Intern': [
        'Currently pursuing Bachelor\'s or Master\'s degree in relevant field',
        'Basic programming knowledge',
        'Interest in cybersecurity and cryptography',
        'Available for minimum 2 months duration',
        'Good academic standing'
      ],
      'M.Tech Thesis': [
        'Currently enrolled in M.Tech program',
        'Strong academic record',
        'Programming experience in relevant technologies',
        'Interest in research and development',
        'Available for thesis duration (typically 1 year)'
      ]
    };
    return defaultRequirements[role] || [];
  };

  const getApplicationDetails = (role, topic, position) => {
    return {
      documents: [
        'Updated CV/Resume',
      ],
      emailTo: position.email,
      subject: `Application for ${role} Position: ${topic}`,
      emailContent: `Dear ${position.supervisor},\n\nI am writing to apply for the ${role} position focusing on "${topic}" at SPRING Lab.\n\nPlease find my application materials attached.\n\nBest regards,\n[Your Name]`,
    };
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleClose = () => {
    setSelectedTopic('');
    onClose();
  };

  if (!isOpen) return null;

  const selectedPosition = topics.find(pos => pos.topic === selectedTopic);
  const applicationDetails = selectedPosition ? getApplicationDetails(role, selectedTopic, selectedPosition) : null;

  return (
    <div className="fixed inset-0 bg-black/85 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          {selectedTopic ? (
            <button
              onClick={() => setSelectedTopic('')}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Topics
            </button>
          ) : (
            <div></div>
          )}
          <h3 className="text-lg font-semibold text-dark">
            {selectedTopic ? `${role}: ${selectedTopic}` : `Select ${role} Topic`}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {!selectedTopic ? (
            // Topic Selection
            <div className="space-y-4">
              <p className="text-sm text-secondary">
                Select a research topic for the {role} position:
              </p>
              {topics.map((position) => (
                <button
                  key={position.id}
                  onClick={() => handleTopicSelect(position.topic)}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <div className="font-medium text-dark">{position.topic}</div>
                </button>
              ))}
            </div>
          ) : (
            // Single Step: Topic + Requirements + How to Apply
            <div className="space-y-6">
              {/* Topic Header */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  {role} Position: {selectedTopic}
                </h4>
              </div>

              {/* Requirements Section */}
              <div>
                <h4 className="font-semibold text-dark mb-3">Requirements:</h4>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <ul className="list-disc list-inside space-y-2 text-secondary">
                    {getPositionRequirements(selectedPosition.id).map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How to Apply Section */}
              <div>
                <h4 className="font-semibold text-dark mb-3">How to Apply:</h4>
                
                {/* a. CV/Resume */}
                <div className="mb-4">
                  <h5 className="font-medium text-dark mb-2">a. CV/Resume:</h5>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-secondary">
                      Prepare and attach your updated CV/Resume in the email.
                    </p>
                  </div>
                </div>

                {/* b. Subject Line */}
                <div className="mb-4">
                  <h5 className="font-medium text-dark mb-2">b. Subject Line:</h5>
                  <div className="relative">
                    <p className="text-secondary bg-gray-50 p-3 pr-12 rounded border">
                      {applicationDetails.subject}
                    </p>
                    <button
                      onClick={() => handleCopy(applicationDetails.subject, 'subject')}
                      className={`absolute right-2 top-2 p-1.5 rounded transition-all duration-200 ${
                        copiedField === 'subject' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {copiedField === 'subject' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {copiedField === 'subject' && (
                    <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
                      <Check className="h-3 w-3" />
                      Subject line copied!
                    </p>
                  )}
                </div>

                {/* c. Email */}
                <div className="mb-4">
                  <h5 className="font-medium text-dark mb-2">c. Email to:</h5>
                  <div className="space-y-3">
                    {/* Email To */}
                    <div>
                      {/* <p className="text-sm text-secondary mb-1">Send email to:</p> */}
                      <div className="relative">
                        <p className="text-secondary bg-gray-50 p-2 pr-12 rounded border">
                          {applicationDetails.emailTo}
                        </p>
                        <button
                          onClick={() => handleCopy(applicationDetails.emailTo, 'emailTo')}
                          className={`absolute right-2 top-2 p-1.5 rounded transition-all duration-200 ${
                            copiedField === 'emailTo' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                          }`}
                        >
                          {copiedField === 'emailTo' ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                      {copiedField === 'emailTo' && (
                        <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          Email address copied!
                        </p>
                      )}
                    </div>

                    {/* Email Content */}
                    {/* <div>
                      <p className="text-sm text-secondary mb-1">Email content:</p>
                      <div className="relative">
                        <pre className="text-secondary bg-gray-50 p-3 pr-12 rounded border whitespace-pre-wrap text-sm min-h-[100px]">
                          {applicationDetails.emailContent}
                        </pre>
                        <button
                          onClick={() => handleCopy(applicationDetails.emailContent, 'emailContent')}
                          className={`absolute right-3 top-3 p-1.5 rounded transition-all duration-200 ${
                            copiedField === 'emailContent' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                          }`}
                        >
                          {copiedField === 'emailContent' ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {copiedField === 'emailContent' && (
                        <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          Email content copied!
                        </p>
                      )}
                    </div> */}
                  </div>
                </div>

                {/* Remark */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Remark:</strong> You will be further notified via email, if you are selected.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleClose}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyDialog;