import React from 'react';
import { Medal } from 'lucide-react'; 

const AchievementCard = ({ title, description }) => {
  return (
    <div className="p-8 space-y-4 text-center cursor-pointer bg-white/5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:bg-white/10 max-w-sm w-full md:w-auto">
      <div className="p-4 bg-cyan-700/30 w-fit rounded-full border-2 border-cyan-500/50 flex items-center justify-center mx-auto">
          <Medal className="text-cyan-400" size={24} />
      </div>
      
      <h3 className="text-xl font-bold text-white pt-2">
        {title}
      </h3>
      
      <p className="text-gray-400 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const OurAchievements = () => {
  const achievements = [
    {
      title: "DTU Incubation",
      description: "Selected for incubation at DTU Innovation and Incubation Foundation (2024)",
    },
    {
      title: "MBRDI Climate Tech Incubator",
      description: "Selected for LaunchPad by T-Hub & Mercedes-Benz Research & Development India for climate tech innovation (2024)",
    },
  ];

  return (
    <div className="min-h-[40rem] bg-black text-white font-sans flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest bg-cyan-900/40 px-3 py-1 rounded-full">
          Recognition
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-4">
          Our Achievements
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-10 max-w-4xl w-full ">
        {achievements.map((item, index) => (
          <AchievementCard 
            key={index} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </div>
      
    </div>
  );
};

export default OurAchievements;
