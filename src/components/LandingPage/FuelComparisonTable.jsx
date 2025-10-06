import React from 'react';
import { Check, X, Wind, Zap, Fuel, Earth, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GradientButton from '@/components/GradientButton';

const comparisonData = [
  {
    id: 1,
    feature: 'Emissions',
    icon: Wind,
    hydrogen: { text: 'Zero-emission', status: Check, color: 'text-green-400' },
    petrol: { text: 'High CO₂, NOₓ', status: X, color: 'text-red-400' },
    diesel: { text: 'High CO₂, NOₓ', status: X, color: 'text-red-400' },
  },
  {
    id: 2,
    feature: 'Efficiency',
    icon: Zap,
    hydrogen: { text: '60-70%', status: Check, color: 'text-green-400' },
    petrol: { text: '20-30%', status: X, color: 'text-orange-400' },
    diesel: { text: '30-40%', status: X, color: 'text-orange-400' },
  },
  {
    id: 3,
    feature: 'Refueling Time',
    icon: Fuel,
    hydrogen: { text: '3-5 mins', status: Check, color: 'text-green-400' },
    petrol: { text: '2-3 mins', status: X, color: 'text-red-400' },
    diesel: { text: '2-3 mins', status: X, color: 'text-red-400' },
  },
  {
    id: 4,
    feature: 'Environmental Impact',
    icon: Earth,
    hydrogen: { text: 'Minimal', status: Check, color: 'text-green-400' },
    petrol: { text: 'Significant', status: X, color: 'text-red-400' },
    diesel: { text: 'High', status: X, color: 'text-red-400' },
  },
  {
    id: 5,
    feature: 'Future Viability',
    icon: Plane,
    hydrogen: { text: 'Future-Proof', status: Check, color: 'text-green-400' },
    petrol: { text: 'Declining', status: X, color: 'text-orange-400' },
    diesel: { text: 'Phasing Out', status: X, color: 'text-red-400' },
  },
];


const ComparisonRow = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 py-4 border-b border-gray-700/50 last:border-b-0">
      <div className="flex items-center text-gray-200 font-medium">
        {data.icon && <data.icon className="w-5 h-5 text-cyan-400 mr-2" />}
        {data.feature}
      </div>

      {/* Hydrogen */}
      <div className="lg:block">
        <span className="lg:hidden text-cyan-400 font-semibold mr-1">Hydrogen:</span>
        <span className={`${data.hydrogen.color} font-medium`}>
          {data.hydrogen.text}{' '}
          {data.hydrogen.status && <data.hydrogen.status className="inline w-4 h-4 ml-1" />}
        </span>
      </div>

      {/* Petrol */}
      <div className="lg:block">
        <span className="lg:hidden text-orange-400 font-semibold mr-1">Petrol:</span>
        <span className={`${data.petrol.color} font-medium`}>
          {data.petrol.text}{' '}
          {data.petrol.status && <data.petrol.status className="inline w-4 h-4 ml-1" />}
        </span>
      </div>

      {/* Diesel */}
      <div className="lg:block">
        <span className="lg:hidden text-red-400 font-semibold mr-1">Diesel:</span>
        <span className={`${data.diesel.color} font-medium`}>
          {data.diesel.text}{' '}
          {data.diesel.status && <data.diesel.status className="inline w-4 h-4 ml-1" />}
        </span>
      </div>
    </div>
  );
};

const FuelComparisonTable = () => {
  return (
    <div className="min-h-fit bg-black flex flex-col items-center p-4 sm:p-12 font-sans">
      <header className="py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Hydrogen</span>?
        </h1>
      </header>

      <div className="w-full max-w-5xl overflow-x-auto">
        <div
          className="rounded-xl p-4 sm:p-8 shadow-2xl mx-auto min-w-[320px]"
          style={{ backgroundColor: '#FFFFFF0D', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <div className="hidden lg:grid grid-cols-4 border-b-2 border-gray-600/70 pb-3 mb-2 font-bold text-base sm:text-xl">
            <div className="text-left text-gray-400 pr-2">Feature</div>
            <div className="text-left text-cyan-400 border-b-2 border-cyan-400 -mb-3 pb-3 pr-2">Hydrogen</div>
            <div className="text-left text-orange-400 border-b-2 border-orange-400 -mb-3 pb-3 pr-2">Petrol</div>
            <div className="text-left text-red-400 border-b-2 border-red-400 -mb-3 pb-3">Diesel</div>
          </div>

          <div className="text-white grid gap-4">
            {comparisonData.map((item) => (
              <ComparisonRow key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
      
      <div  className="w-full max-w-sm sm:max-w-md lg:max-w-fit mt-8">
        <GradientButton
          className="w-full lg:w-auto py-6 font-bold rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105"
          text="Try Our Hydrogen Calculator"
          whereTo="/calculator"
        />
      </div>
    </div>
  );
};

export default FuelComparisonTable;
