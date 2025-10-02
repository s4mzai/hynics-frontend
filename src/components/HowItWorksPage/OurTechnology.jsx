import React from 'react';
import { Check } from 'lucide-react';

const FeatureCard = ({ title, features }) => {
  return (
    <div 
      className="p-6 md:p-8 rounded-xl bg-[rgba(255,255,255,0.05)] h-full transition duration-300 ease-in-out transform hover:scale-[1.02] border-2 border-transparent hover:border-cyan-400"
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
        {title}
      </h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-xl mr-3 mt-0.5 flex-shrink-0 text-cyan-400"><Check/></span>
            <span className="text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const OurTechnology = () => {
  const mobileFeatures = [
    'Compact design fitting standard transportation dimensions',
    'Rapid deployment with minimal setup requirements',
    'Modular expansion capabilities for varying demand',
    'Multiple dispensing points for concurrent refueling',
    'Integrated cooling systems for optimal performance',
  ];

  const fixedFeatures = [
    'High-capacity storage for continuous operation',
    'Integration with existing fuel station infrastructure',
    'Advanced dispensing technology for faster refueling',
    'Multiple dispensing points for high-traffic locations',
    'Option for on-site hydrogen generation integration',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Hynics
          </span>{' '}
          Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          A detailed look at our hydrogen delivery technology, from production
          to vehicle refueling, and the innovative engineering that makes it
          possible.
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-2">
            OUR TECHNOLOGY
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Innovations in Hydrogen Delivery
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FeatureCard title="Mobile Fuel Modules" features={mobileFeatures} />
          <FeatureCard title="Fixed Stations" features={fixedFeatures} />
        </div>
      </main>
    </div>
  );
};

export default OurTechnology;
