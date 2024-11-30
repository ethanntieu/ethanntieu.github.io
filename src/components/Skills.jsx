import React from 'react';
import { Code, Database, Palette, Server } from 'lucide-react';
import { skillsData } from '../data/skills';

const iconMap = {
  Code: Code,
  Database: Database,
  Palette: Palette,
  Server: Server,
};

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, { icon, skills }]) => {
          const IconComponent = iconMap[icon];
          return (
            <div
              key={category}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-blue-500">
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;