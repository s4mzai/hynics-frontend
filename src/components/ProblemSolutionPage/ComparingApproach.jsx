import React from 'react';
import { TrendingUp, DollarSign, Move, Globe } from 'lucide-react';

const hynicsComparisonData = [
  { feature: 'Deployment Time', icon: TrendingUp, traditional: '12-24 months', hynics: '1 week' },
  { feature: 'Initial Investment', icon: DollarSign, traditional: '₹5-6 crores', hynics: '₹4-5 crores' },
  { feature: 'Flexibility', icon: Move, traditional: 'Fixed location', hynics: 'Relocatable on demand' },
  { feature: 'Sustainability', icon: Globe, traditional: 'Limited', hynics: 'Highly Sustainable' },
];

const HynicsComparisonRow = ({ data }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0 py-4">
      <div className="flex flex-col space-y-3 sm:hidden">
        <div className="flex items-center text-gray-200 font-semibold">
          {data.icon && <data.icon className="w-5 h-5 text-green-400 mr-2" />}
          {data.feature}
        </div>
        <div className="flex justify-between  p-3 rounded-lg">
          <span className="text-gray-400 font-medium">Traditional</span>
          <span className="text-gray-300">{data.traditional}</span>
        </div>
        <div className="flex justify-between bg-[#1a1a1a] p-3 rounded-lg">
          <span className="text-cyan-300 font-medium">Hynics</span>
          <span className="text-cyan-200">{data.hynics}</span>
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-3 gap-4">
        <div className="flex items-center text-gray-200 font-medium">
          {data.icon && <data.icon className="w-5 h-5 text-green-400 mr-2" />}
          {data.feature}
        </div>
        <div className="text-gray-400 font-medium">{data.traditional}</div>
        <div className="text-cyan-300 font-medium">{data.hynics}</div>
      </div>
    </div>
  );
};

const ComparingApproach = () => {
  return (
    <div className="min-h-[38rem] flex flex-col items-center p-4 sm:p-8">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
          Comparative Analysis
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3">
          Traditional vs. <span className="text-cyan-300">Hynics Approach</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl">
        <div className="rounded-xl p-4 sm:p-8 shadow-2xl mx-auto bg-[#FFFFFF0D] border border-white/20">
          <div className="hidden sm:grid grid-cols-3 border-b-2 border-gray-600/70 pb-3 mb-2 font-bold text-sm sm:text-base">
            <div className="text-left text-gray-400 pr-2">Parameter</div>
            <div className="text-left text-gray-400 pr-2">Traditional Fixed Stations</div>
            <div className="text-left text-cyan-300 pr-2">Hynics Mobile Solutions</div>
          </div>

          <div className="text-white">
            {hynicsComparisonData.map((item, index) => (
              <HynicsComparisonRow key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparingApproach;
