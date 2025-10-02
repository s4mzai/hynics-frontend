import React from 'react';


const CHALLENGES = [
  {
    id: 1,
    title: "Limited Refuelling Infrastructure",
    description: "The scarcity of hydrogen refuelling stations in tier 2 and tier 3 cities restricts widespread adoption of hydrogen-powered vehicles. This creates a \"chicken and egg\" problem, where consumers won't buy hydrogen vehicles without infrastructure, and companies won't build infrastructure without demand."
  },
  {
    id: 2,
    title: "High Initial Costs",
    description: "Establishing permanent hydrogen refuelling stations involves substantial capital investment and long construction periods. The cost of land acquisition, permits, and construction can exceed $50–$60 crores per station, making it prohibitively expensive for rapid deployment."
  },
  {
    id: 3,
    title: "Geographical Disparities",
    description: "Fixed refuelling stations are separated by large distances, leaving many areas under-served and limiting accessibility. In India, due to vast geography and diverse terrains, this becomes even more challenging."
  },
  {
    id: 4,
    title: "Regulatory Challenges",
    description: "Hydrogen as a fuel faces various regulatory hurdles across different states and regions, which complicates standardization and widespread adoption."
  }
];

const SOLUTIONS = [
  {
    id: 1,
    title: "Mobile Deployment",
    description: "Mobile modules can be deployed to areas with high demand or to support temporary needs, ensuring wider accessibility. Our technology allows rapid deployment within hours, not months."
  },
  {
    id: 2,
    title: "Cost-Effective Implementation",
    description: "Mobile modules reduce the need for significant upfront investment in permanent structures and large-scale land acquisition. The capital expense is reduced by 60-70% compared to fixed stations."
  },
  {
    id: 3,
    title: "Scalable Solutions",
    description: "Our stations can be scaled and adapted based on demand, providing a dynamic solution that grows with the market. We can quickly deploy additional units to meet increasing demand."
  },
  {
    id: 4,
    title: "Versatile Installation",
    description: "Mobile stations can be converted into fixed fuel stations and deployed on existing fuel pumps, highways, or working sites, leveraging existing infrastructure wherever possible."
  },
  {
    id: 5,
    title: "Data-Driven Deployment",
    description: "We use advanced analytics to determine optimal locations for our mobile stations, ensuring maximum utilization and service coverage."
  }
];

const Card = ({ number, title, description, isChallenge }) => {
  const challengeClasses = `hover:border-red-500/80 hover:shadow-red-500/20`;
  const solutionClasses = `hover:border-green-500/80 hover:shadow-green-500/20`;
  const hoverClasses = isChallenge ? challengeClasses : solutionClasses;


  const cardClasses = `
    w-full max-w-[90%] p-8 rounded-xl mb-4
    transition-all duration-300 transform
    bg-[#FFFFFF0D] border border-gray-900
    hover:scale-[1.01] shadow-md
    mx-auto
    ${hoverClasses}
  `;

  return (
    <div className={cardClasses}>
      <div className="flex items-center md:items-start gap-3">
        <div className={`text-3xl mb-2 font-bold ${isChallenge ? 'text-red-500' : 'text-green-500'} flex-shrink-0`}>
          {number}
        </div>
        <h3 className="text-lg  md:text-xl font-semibold text-white pt-0.5">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 leading-relaxed md:pl-12">
        {description}
      </p>
    </div>
  );
};

const ChallengeSolution = () => {
  return (
    <div className="min-h-screen text-white p-4 sm:p-8 lg:p-12">

      <header className="text-center mb-16 pt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          <span className="text-white">Hydrogen Adoption:</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 ml-3">Challenges & Solutions</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Understanding the key barriers to hydrogen technology adoption and how Hynics is overcoming them with innovative approaches.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-x-10 gap-y-12">
        
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-2 ml-[5%]">
            THE CHALLENGES
          </h2>
          <h3 className="text-3xl font-bold mb-8 ml-[5%]">
            Problems in Hydrogen Adoption
          </h3>
          <div className="space-y-6">
            {CHALLENGES.map((challenge) => (
              <Card
                key={challenge.id}
                number={challenge.id.toString().padStart(2, '0')}
                title={challenge.title}
                description={challenge.description}
                isChallenge={true}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-2 ml-[5%]">
            OUR APPROACH
          </h2>
          <h3 className="text-3xl font-bold mb-8 ml-[5%]">
            Hynics' Innovative Solutions
          </h3>
          <div className="space-y-6">
            {SOLUTIONS.map((solution) => (
              <Card
                key={solution.id}
                number={solution.id.toString().padStart(2, '0')}
                title={solution.title}
                description={solution.description}
                isChallenge={false} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSolution;
