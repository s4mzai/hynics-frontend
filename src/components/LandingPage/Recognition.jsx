import React from 'react';

const SupportedBy = [
  { 
    name: 'Mercedes-Benz R&D India', 
    url: 'https://www.hynics.in/lovable-uploads/mercedes.png',
    alt: 'Mercedes-Benz Logo'
  },
  { 
    name: 'Casre', 
    url: 'https://www.hynics.in/lovable-uploads/casre.png',
    alt: 'Casre Logo' 
  },
  { 
    name: 'T-Hub', 
    url: 'https://www.hynics.in/lovable-uploads/thub.png',
    alt: 'T-Hub Logo' 
  },
  { 
    name: 'DTU Innovation & Incubation', 
    url: 'https://www.hynics.in/lovable-uploads/dif.png',
    alt: 'DTU Innovation & Incubation Logo' 
  },
];

const SupportLogoCard = ({ url, name, alt }) => {

  return (
    <div className="flex flex-col items-center p-10 rounded-xl hover:bg-[#FFFFFF0D] justify-start text-center  w-full sm:w-1/2 md:w-1/4">
      <img
        src={url}
        alt={alt}
        className="h-16 sm:h-20 object-contain mb-3 transition duration-300"
      />
      <p className="text-sm sm:text-base font-normal leading-tight text-gray-200">{name}</p>
    </div>
  );
};

const RecognitionSection = () => {
  return (
    <div className="bg-black flex items-center justify-center mb-10 sm:mb-40">
        <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4">
        <div className="text-center mb-10">
            <p className="text-sky-400 text-xs uppercase font-semibold tracking-widest mb-1">
            RECOGNITION
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Supported By
            </h1>
        </div>

        <div 
            className="rounded-xl p-8 md:p-12 w-full shadow-2xl backdrop-blur-sm bg-[#FFFFFF0D]"
        >
            <div className="flex flex-wrap justify-around items-start gap-y-10">
            {SupportedBy.map((partner) => (
                <SupportLogoCard 
                key={partner.name}
                url={partner.url}
                name={partner.name}
                alt={partner.alt}
                />
            ))}
            </div>
        </div>
        </div>
    </div>
  );
};



export default RecognitionSection;
