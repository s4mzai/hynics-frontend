import React from 'react';

const content = {
  mission: "We're on a mission to revolutionize hydrogen infrastructure in India, making clean energy accessible through innovative mobile and fixed hydrogen fuel stations.",
  storyHeader: "OUR STORY",
  storyTitle: "Building India's Hydrogen Future",
  body: [
    {
      text: "At HYNICS, we are driven by a vision to transform India’s energy landscape through hydrogen innovation. While hydrogen holds immense potential as a sustainable fuel, the **lack of efficient distribution infrastructure** remains a major challenge. Our mission is to bridge this gap and make **hydrogen fuel easily accessible** across industries, transportation, and commercial sectors."
    },
    {
      text: "HYNICS was founded with the goal of **revolutionizing hydrogen mobility**. Our team has developed a **modular, mobile fuel station** that enables **on-demand hydrogen refueling** without the need for permanent infrastructure. Designed for flexibility, our mobile stations feature:"
    }
  ],
  features: [
    "High-efficiency compressors for precise pressure control",
    "Storage tanks with a 250kg capacity for optimized fuel transport",
    "Dispensers capable of delivering 35kg in just 10-14 minutes",
    "Automated control systems for seamless operation and safety monitoring"
  ],
  closing: [
    {
      text: "Our innovative **plug-and-play system** can be installed on trucks or as portable hydrogen pumps, ensuring hydrogen is available whenever and wherever needed. With advanced safety mechanisms and remote monitoring, we prioritize efficiency, security, and scalability in every deployment."
    },
    {
      text: "Backed by industry leaders like **Mercedes-Benz R&D India and T-Hub**, we are rapidly expanding our **hydrogen refueling ecosystem** to support the transition towards clean energy solutions. Our goal is to **reduce hydrogen transportation costs** and **accelerate adoption** at the grassroots level, making sustainable fuel a reality for everyone."
    },
    {
      text: "At HYNICS, we are not just building hydrogen fuel stations – we are building the future of clean energy in India."
    }
  ]
};

const AboutHynics = () => {
  return (
    <div className="min-h-screen text-gray-100 p-4 sm:p-8">
      <header className="max-w-4xl mx-auto text-center py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          About <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'>  Hynics</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
          {content.mission}
        </p>
      </header>
      <section className="max-w-4xl mx-auto pt-4 pb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase text-sky-400 mb-2 tracking-widest">
            {content.storyHeader}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {content.storyTitle}
          </h2>
        </div>
        <div className="space-y-6 text-gray-300">
          {content.body.map((p, index) => (
            <p key={index} className="text-base leading-relaxed">
              <span dangerouslySetInnerHTML={{
                __html: p.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            </p>
          ))}
          <ul className="list-disc list-inside space-y-2 pl-4 text-base">
            {content.features.map((feature, index) => (
              <li key={index} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
          {content.closing.map((p, index) => (
            <p key={`closing-${index}`} className="text-base leading-relaxed pt-2">
              <span dangerouslySetInnerHTML={{
                __html: p.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            </p>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutHynics;
