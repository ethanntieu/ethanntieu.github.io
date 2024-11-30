import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.location}</p>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{edu.duration}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{edu.description}</p>
            <p className="mt-4 text-gray-600">{edu.classes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;