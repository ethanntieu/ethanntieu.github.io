import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500">{exp.location}</p>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.duration}</span>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-600">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;