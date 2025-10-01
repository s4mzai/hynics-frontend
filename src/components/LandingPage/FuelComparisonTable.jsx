import React from 'react';
import { Check, X, Wind, Zap, Fuel, Earth, Plane   } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const comparisonData = [
  {
    id: 1,
    feature: 'Emissions',
    icon: Wind, 
    h_text: 'Zero-emission',
    h_status: Check,
    p_text: 'High CO₂, NOₓ',
    p_status: X,
    d_text: 'High CO₂, NOₓ',
    d_status: X,
    h_color: 'text-green-400',
    p_color: 'text-red-400',
    d_color: 'text-red-400',
  },
  {
    id: 2,
    feature: 'Efficiency',
    icon: Zap,
    h_text: '60-70%',
    h_status: Check,
    p_text: '20-30%',
    p_status: X,
    d_text: '30-40%',
    d_status: X,
    h_color: 'text-green-400',
    p_color: 'text-orange-400',
    d_color: 'text-orange-400',
  },
  {
    id: 3,
    feature: 'Refueling Time',
    icon: Fuel,
    h_text: '3-5 mins',
    h_status: Check,
    p_text: '2-3 mins',
    p_status: X,
    d_text: '2-3 mins',
    d_status: X,
    h_color: 'text-green-400',
    p_color: 'text-red-400',
    d_color: 'text-red-400',
  },
  {
    id: 4,
    feature: 'Environmental Impact',
    icon: Earth,
    h_text: 'Minimal',
    h_status: Check,
    p_text: 'Significant',
    p_status: X,
    d_text: 'High',
    d_status: X,
    h_color: 'text-green-400',
    p_color: 'text-red-400',
    d_color: 'text-red-400',
  },
  {
    id: 5,
    feature: 'Future Viability',
    icon: Plane,
    h_text: 'Future-Proof',
    h_status: Check,
    p_text: 'Declining',
    p_status: X,
    d_text: 'Phasing Out',
    d_status: X,
    h_color: 'text-green-400',
    p_color: 'text-orange-400',
    d_color: 'text-red-400',
  },
];

const ComparisonRow = ({ data }) => (
  <div className="grid grid-cols-4 border-b border-gray-700/50 py-4 last:border-b-0 text-sm sm:text-base">

    <div className="flex items-center text-left font-medium text-gray-200 pr-2">
    {data.icon && <data.icon className="w-5 h-5 text-cyan-400 mr-2" />}
    {data.feature}
    </div>

    <div className={`text-left font-medium ${data.h_color} pr-2`}>
    {data.h_text} {data.h_status && <data.h_status className="inline w-4 h-4 ml-1" />}
    </div>

    <div className={`text-left font-medium ${data.p_color} pr-2`}>
    {data.p_text} {data.p_status && <data.p_status className="inline w-4 h-4 ml-1" />}
    </div>

    <div className={`text-left font-medium ${data.d_color}`}>
    {data.d_text} {data.d_status && <data.d_status className="inline w-4 h-4 ml-1" />}
    </div>
  </div>
);

const FuelComparisonTable = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4 sm:p-12 font-sans">

      <header className="py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Why Choose <span className="text-cyan-400">Hydrogen</span>?
        </h1>
      </header>

      <div className="w-full max-w-5xl">
        <div 
          className="rounded-xl p-4 sm:p-8 shadow-2xl mx-auto"
          style={{ 
            backgroundColor: '#FFFFFF0D', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}
        >
          
          <div className="grid grid-cols-4 border-b-2 border-gray-600/70 pb-3 mb-2 font-bold text-base sm:text-xl">

            <div className="text-left text-gray-400 pr-2">Feature</div>

            <div className="text-left text-cyan-400 border-b-2 border-cyan-400 -mb-3 pb-3 pr-2">Hydrogen</div>
            
            <div className="text-left text-orange-400 border-b-2 border-orange-400 -mb-3 pb-3 pr-2">Petrol</div>

            <div className="text-left text-red-400 border-b-2 border-red-400 -mb-3 pb-3">Diesel</div>

          </div>

          <div className="text-white">
            {comparisonData.map((item) => (
              <ComparisonRow key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Link to={"/calculator"}>
        <Button  
            className="mt-12 px-8 py-6 bg-cyan-500 text-black font-bold rounded-full text-lg shadow-lg hover:bg-cyan-400 transition duration-300 transform hover:scale-105"
        >
            Try Our Hydrogen Calculator
        </Button>
      </Link>
    </div>
  );
};

export default FuelComparisonTable;
