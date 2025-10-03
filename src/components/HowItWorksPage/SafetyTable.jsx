import React from 'react';
import { ChevronRight } from 'lucide-react';

const safetyFeatures = [
  "Multiple hydrogen leak detection sensors with automated shutdown",
  "Fireproof storage tanks with specialized alloy composition",
  "Remote monitoring with 24/7 technical support",
  "Redundant safety systems with fail-safe mechanisms",
  "Periodic safety inspections and certification",
  "Employee and operator training programs",
  "Blast-resistant housing for critical components",
  "Ventilation for gases escape",
];

const SafetyTable = () => {
  const accentColor = "text-cyan-400";
  const FeatureItem = ({ text }) => (
    <div className="flex items-start space-x-3">
      <ChevronRight className={`flex-shrink-0 w-6 h-6 mt-0.5 ${accentColor}`} />
      <p className="text-gray-200 text-lg sm:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );

  return (
    <div className="min-h-fit mb-10 bg-black flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 max-w-3xl">
        <p className={`text-sm font-semibold tracking-widest uppercase mb-3 px-2 py-0.5  bg-cyan-400/20 ${accentColor} inline-block rounded-full`}>
          SAFETY FIRST
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Our Commitment to Safety
        </h1>
      </div>
      <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-4xl w-full border border-transparent transition duration-300 ease-in-out transform hover:scale-[1.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {safetyFeatures.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyTable;
