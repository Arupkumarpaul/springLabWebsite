import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Contact Us
          </h2>
          {/* <p className="text-lg text-secondary max-w-2xl mx-auto">
            Get in touch with the NanoScience Innovation Lab for collaborations, inquiries, or more information about our research.
          </p> */}
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Email</h3>
              <a 
                href="mailto:souradyuti@iitbhilai.ac.in"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                souradyuti@iitbhilai.ac.in
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Phone</h3>
              <p 
               
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Coming Soon
              </p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Address</h3>
              <p className="text-secondary text-center">
                405B, Agastya (ED-1)<br />
                IIT Bhilai<br />
                
                Bhilai (C.G.): 491002
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* <div className="text-center mt-8">
          <p className="text-secondary text-sm">
            For specific inquiries, please include the relevant project or research area in your email subject line.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;