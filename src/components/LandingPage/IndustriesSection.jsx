import React from 'react';
import { Factory, Home, Rocket, Tractor, Truck, Wrench } from 'lucide-react';

const impactAreas = [
  {
    icon: Tractor,
    title: "Agro Industry",
    description: "H2 can be used in operating heavy machinery used in agriculture like tractors and harvesters.",
  },
  {
    icon: Home,
    title: "Commercial & Residential",
    description: "All residential and commercial complexes will use H2 gensets in the near future for reliable power.",
  },
  {
    icon: Factory,
    title: "Industrial Use",
    description: "Heavy industrial equipment and machinery will use H2 for power. H2 can also be used in furnaces.",
  },
  {
    icon: Truck,
    title: "Transport Industry",
    description: "Upcoming H2 buses, trucks, and trains will require consistent hydrogen fuel supply.",
  },
  {
    icon: Wrench,
    title: "Mining & Construction",
    description: "Heavy machinery used in mining and construction will use H2 to power operations sustainably.",
  },
  {
    icon: Rocket,
    title: "Aerospace Industry",
    description: "Airlines are pushing for greener jet fuel, making H2 a lucrative and sustainable option.",
  },
];

const ImpactCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 md:p-8 bg-white/5 rounded-xl shadow-lg hover:bg-white/10 transition-colors duration-300 h-full flex flex-col items-center">
    <div className="mb-4 text-blue-400">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-base leading-relaxed flex-grow">{description}</p>
  </div>
);

const IndustriesSection = () => {
  return (
    <div className="min-h-fit bg-black p-8 md:p-12 lg:p-20 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <header className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-3 text-xs font-medium uppercase tracking-widest text-blue-400 bg-gray-800 rounded-full">
            Industries
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Impact Area
          </h1>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {impactAreas.map((area, index) => (
            <ImpactCard 
              key={index}
              icon={area.icon} 
              title={area.title} 
              description={area.description} 
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default IndustriesSection;
