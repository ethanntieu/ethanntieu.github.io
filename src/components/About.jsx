import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Hi, I'm [Your Name] 👋
          </h1>
          <h2 className="text-2xl text-gray-600">
            Software Developer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate software developer with expertise in building web applications
            using modern technologies. I love creating elegant solutions to complex problems
            and am always eager to learn new technologies.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-full overflow-hidden shadow-xl">
            <img
              src="/api/placeholder/400/400"
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg">
            Available for hire
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;