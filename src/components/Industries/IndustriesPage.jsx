import React from 'react';
import { Leaf, Home, Factory, Truck, Hammer, Plane, Ship, Server } from 'lucide-react';

const industriesData = [
  {
    title: "Agriculture",
    description: "Hydrogen-powered agricultural equipment offers clean alternatives for tractors, harvesters, and irrigation systems, reducing emissions while maintaining power.",
    applications: ["Tractors & Harvesters", "Irrigation Pumps", "Temperature-Controlled Transport", "Crop Processing Equipment"],
    Icon: Leaf,
  },
  {
    title: "Commercial & Residential",
    description: "All residential and commercial complexes will use H2 gensets in the near future for reliable, clean power, overcoming both the noise and emissions of diesel generators.",
    applications: ["Backup Power Generation", "Combined Heat & Power Systems", "Uninterrupted Power Supply", "Longer Refueling Cycle"],
    Icon: Home,
  },
  {
    title: "Industrial Use",
    description: "Heavy industrial equipment and machinery will use H2 for power. H2 can also be used in furnaces, boilers, and heating applications, replacing fossil fuels.",
    applications: ["Material Handling Equipment", "Furnaces", "Steel Manufacturing", "Chemical Production"],
    Icon: Factory,
  },
  {
    title: "Transport & Mobility",
    description: "Upcoming H2 buses, trucks, and trains will require new infrastructure for refueling, creating a growing market for mobile and fixed refueling infrastructure.",
    applications: ["Public Transit Buses", "Heavy-Duty Trucks", "Freight Trains", "Fleet Vehicles"],
    Icon: Truck,
  },
  {
    title: "Mining & Construction",
    description: "Heavy machinery used in mining and construction will use H2 in power applications sustainably, maintaining performance while reducing environmental impact.",
    applications: ["Excavators & Loaders", "Ore Processing", "Construction Cranes", "Drilling Equipment"],
    Icon: Hammer,
  },
  {
    title: "Aerospace",
    description: "Airlines are pushing for greener jet fuel, making H2 a powerful and sustainable option for the future of aviation, with potential for both propulsion and auxiliary power.",
    applications: ["Aircraft Propulsion", "Airport Ground Support", "Auxiliary Power Units", "Unmanned Aerial Vehicles"],
    Icon: Plane,
  },
  {
    title: "Maritime",
    description: "Shipping vessels are exploring hydrogen as an alternative fuel to meet stricter emissions regulations while maintaining long-distance transport capabilities.",
    applications: ["Port Equipment", "Small & Medium Vessels", "Auxiliary Ship Power", "Ferry Systems"],
    Icon: Ship,
  },
  {
    title: "Data Centers",
    description: "Mission-critical facilities can benefit from reliable, clean power generation using hydrogen fuel cells for both primary and backup energy needs.",
    applications: ["Backup Power Systems", "Primary Power Generation", "Combined Cooling & Power", "Off-grid Operations"],
    Icon: Server,
  },
];


const IndustryCard = ({ title, description, applications, Icon }) => {
  return (
    <div
      className="
        bg-white/5 p-6 rounded-xl border border-white/10
        shadow-xl transition duration-300 ease-in-out
        hover:scale-[1.02] hover:bg-white/10
        flex flex-col h-full
      "
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className='w-16 h-16 flex items-center justify-center bg-cyan-800/30 rounded-full'>
            <Icon className="w-8 h-8 text-cyan-400  flex-shrink-0" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-wide">
          {title}
        </h3>
      </div>

      <p className="text-sm text-gray-300 mb-6 flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase">
          Key Applications
        </h4>
        <ul className="text-xs text-gray-400 space-y-1 list-disc ml-4">
          {applications.map((app, index) => (
            <li key={index} className="pl-1">
              {app}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const IndustriesPage = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="text-white">Industries </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              We Will Serve
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Hynrics provides hydrogen solutions across multiple sectors, enabling the transition to clean, efficient energy for a wide range of applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
