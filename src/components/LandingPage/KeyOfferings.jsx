import React from 'react';
import { Fuel, Factory, BatteryCharging, Home } from 'lucide-react';


const keyOfferingsItems = [
  { icon: Fuel, title: 'Mobile Fuel Stations', description: 'Bring hydrogen refueling directly to your location with our flexible mobile stations.' },
  { icon: Factory , title: 'Fixed Stations', description: 'Permanent hydrogen refueling infrastructure for consistent supply.' },
  { icon: BatteryCharging, title: 'Fast Refueling', description: 'Quickly refuel your hydrogen vehicles with our high-speed delivery systems.' },
  { icon: Home, title: 'Module Sales', description: 'Purchase your own hydrogen fuel modules for business or franchise opportunities.' },
];

const hurdles = [
  { number: '01', title: 'Limited Refueling Infrastructure', description: 'The scarcity of hydrogen refueling stations in tier 2 and tier 3 cities restricts widespread adoption of hydrogen-powered vehicles.' },
  { number: '02', title: 'High Initial Costs', description: 'Establishing permanent hydrogen refueling stations involves substantial capital investment and long construction periods.' },
  { number: '03', title: 'Geographical Disparities', description: 'Fixed refueling stations are separated by large distances, leaving many areas under-served and limiting accessibility.' },
  { number: '04', title: 'Deployment Challenges', description: 'Installing new stations requires planning and space in existing infrastructure.' },
];

const solutions = [
  { number: '01', title: 'Mobile Deployment', description: 'Mobile modules can be deployed to areas with high demand or to support temporary needs, ensuring wider accessibility.' },
  { number: '02', title: 'Cost-Effective Implementation', description: 'Mobile modules reduce the need for significant upfront investment in permanent infrastructure, allowing for quicker deployment.' },
  { number: '03', title: 'Scalable Solutions', description: 'Our stations can be scaled and adapted based on demand, providing a dynamic solution that grows with the market.' },
  { number: '04', title: 'Versatile Installation', description: 'Mobile stations can be converted into fixed fuel stations and deployed on existing fuel pumps, highways, or trucking sites.' },
];


const OfferingCard = ({ icon: Icon, title, description }) => (
  <div className="flex-1 flex flex-col items-center justify-center text-center min-w-[280px] max-w-[350px] p-8 bg-[#FFFFFF0D] rounded-xl transition-all duration-300 transform hover:scale-[1.03] border border-gray-900 hover:border-cyan-500 shadow-lg hover:shadow-cyan-500/30">
    <div className="mb-4 w-16 h-16 flex items-center justify-center bg-cyan-800/30 rounded-full">
      <Icon className="w-8 h-8 text-cyan-400" />
    </div>
    <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
    <p className="text-gray-400 text-base">{description}</p>
  </div>
);

const DetailItem = ({ number, title, description, isHurdle = true }) => {
  if (!title) return null;

  const hoverClasses = isHurdle
    ? 'hover:scale-[1.01] hover:border-red-500/80 shadow-md hover:shadow-red-500/20'
    : 'hover:scale-[1.01] hover:border-green-500/80 shadow-md hover:shadow-green-500/20';

  return (
    <div className={`w-full max-w-[90%] p-8 rounded-xl mb-4 transition-all duration-300 transform bg-[#FFFFFF0D] border border-gray-900 ${hoverClasses} mx-auto`}>
      <div className="flex items-start">
        <div className={`text-3xl font-bold mr-6 ${isHurdle ? 'text-red-500' : 'text-green-500'} flex-shrink-0`}>
          {number}
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
          <p className="text-gray-400 text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};


const KeyOfferings = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-bold mb-2">KEY OFFERINGS</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Why We Are The Right Choice
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {keyOfferingsItems.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </div>

        <div className="mb-16">
          <div className='ml-10'>
              <p className="text-sm uppercase tracking-widest text-cyan-400 font-bold mb-2">THE CHALLENGES</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">Key Hurdles</h2>
          </div>
          <div className="space-y-4">
            {hurdles.map((item, index) => (
              <DetailItem
                key={`hurdle-${index}`}
                number={item.number}
                title={item.title}
                description={item.description}
                isHurdle={true}
              />
            ))}
          </div>
        </div>

        <div>
          <div className='ml-10'>
            <p className="text-sm uppercase tracking-widest text-cyan-400 font-bold mb-2">OUR APPROACH</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">Hynics' Innovative Solutions</h2>
          </div>
          <div className="space-y-4">
            {solutions.map((item, index) => (
              <DetailItem
                key={`solution-${index}`}
                number={item.number}
                title={item.title}
                description={item.description}
                isHurdle={false}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeyOfferings;
