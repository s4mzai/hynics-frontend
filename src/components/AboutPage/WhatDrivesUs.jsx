import React from 'react';
import { Lightbulb, Target, Users, BarChart2 } from 'lucide-react';

const companyValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: "We continuously push the boundaries of what's possible in hydrogen delivery and infrastructure.",
  },
  {
    icon: Target,
    title: 'Sustainability',
    description: 'Our mission is to accelerate the transition to clean energy through practical hydrogen solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with partners, customers, and communities to create shared success.',
  },
  {
    icon: BarChart2,
    title: 'Impact',
    description: 'We measure our success by the positive environmental and economic impact of our solutions.',
  },
];

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out hover:scale-[1.02] border border-transparent hover:border-cyan-400 flex flex-col space-y-4">
    <div className="flex flex-row items-center space-x-4">
      <div className="p-3 w-fit rounded-full bg-cyan-800/30 flex-shrink-0">
        <Icon className="w-7 h-7 text-cyan-400" />
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>

    <p className="text-base text-gray-300 leading-relaxed">{description}</p>
  </div>
);


const WhatDrivesUs = () => {
  return (
    <div className="min-h-[35rem] bg-black text-white font-sans flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-20">
          <p className="inline-block px-4 py-1 rounded-full bg-cyan-400/20 text-sm font-medium uppercase tracking-widest text-cyan-400 mb-4">
            Our Values
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            What Drives Us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatDrivesUs;
