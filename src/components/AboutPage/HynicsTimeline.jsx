import React from 'react';
import { Calendar } from 'lucide-react';

const timelineData = [
  { year: "2024", title: "Inspiration Strikes", description: "Our journey began with a shared fascination for hydrogen-powered vehicles like Toyota's Mirai and Hyundai's Nexo." },
  { year: "2024", title: "Identifying the Problem", description: "We realized the biggest challenge: the lack of fueling infrastructure." },
  { year: "2024", title: "Concept Development", description: "We envisioned a revolutionary hydrogen fuel delivery system." },
  { year: "2024", title: "Solution Design", description: "We conceptualized mobile and fixed hydrogen fueling stations." },
  { year: "2025", title: "Prototype Development", description: "We started designing and testing our hydrogen fuel station prototypes." },
  { year: "2025", title: "Building a Sustainable Future", description: "Through Hynics, we are paving the way for a cleaner tomorrow." },
];

const TimelineItem = ({ year, title, description, alignRight }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className={`flex flex-col sm:flex-row ${alignRight ? 'sm:flex-row-reverse' : ''} items-start mb-12 relative`}>
      <div
        className="hidden sm:flex z-10 bg-cyan-500 rounded-full w-12 h-12 flex-shrink-0 absolute left-4 sm:left-1/2 items-center justify-center transition-transform duration-300 cursor-pointer"
        style={{
          transform: isHovered
            ? 'translateX(-50%) scale(1.25)'
            : 'translateX(-50%) scale(1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Calendar className="w-6 h-6 text-white" />
      </div>
      <div
        className={`rounded-xl bg-[rgba(255,255,255,0.05)] h-full p-6 shadow-lg border-2 transition duration-300 ease-in-out transform cursor-pointer w-full sm:w-5/12  ${
          alignRight
            ? 'sm:ml-8 sm:text-left'
            : 'sm:mr-8 sm:text-left'
        } ${isHovered ? 'scale-[1.02] border-cyan-400' : 'border-transparent'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-cyan-400 font-semibold text-sm">{year}</span>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

const HynicsTimeline = () => {
  return (
    <div className="relative min-h-screen bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-sm tracking-widest uppercase font-semibold mb-2">Our Journey</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'>Hynics</span> Timeline
        </h1>
      </div>

      <div className="relative">
        <div className="hidden sm:block absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500"></div>

        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            alignRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default HynicsTimeline;
