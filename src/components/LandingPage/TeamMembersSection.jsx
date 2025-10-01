import React from "react";
import { Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const AllTeamMembers = [
  {
    name: "Animesh Mathur",
    role: "Founder & CEO",
    imageUrl: "https://www.hynics.in/lovable-uploads/animesh.jpg", 
    alt: "Image of Animesh Mathur, Founder & CEO",
    linkedinUrl: "https://www.linkedin.com/in/animesh-mathur-83aa8929a",
  },
  {
    name: "Ajay Nayak",
    role: "Co-founder & COO",
    imageUrl: "https://www.hynics.in/lovable-uploads/ajay.jpg", 
    alt: "Image of Ajay Nayak, Co-founder & COO",
    linkedinUrl: "https://www.linkedin.com/in/ajay-nayak-931749299",
  },
  {
    name: "Sachin",
    role: "R&D Member",
    imageUrl: "https://www.hynics.in/lovable-uploads/sanjay.jpg", 
    alt: "Image of Sachin, R&D Member",
    linkedinUrl: "https://www.linkedin.com/in/sachinahirwar816",
  },
  {
    name: "Nitin",
    role: "R&D Member",
    imageUrl: "https://www.hynics.in/lovable-uploads/sachin.jpg", 
    alt: "Image of Nitin, R&D Member",
    linkedinUrl: "https://www.linkedin.com/in/nitin-pal-3388b8324",
  },
  {
    name: "Priyanjan Mitra",
    role: "Business Development",
    imageUrl:"https://www.hynics.in/lovable-uploads/priyanjan.png", 
    alt: "Image of Priyanjan Mitra, Business Development",
    linkedinUrl:"https://www.linkedin.com/in/priyanjan-mitra-3a9684262/?originalSubdomain=in",
  },
];

const TeamMemberCard = ({ name, role, imageUrl, alt, linkedinUrl }) => (
    <div
        className="
            flex flex-col rounded-xl overflow-hidden 
            bg-white/5 border border-gray-800 backdrop-blur-sm
            shadow-xl shadow-gray-900 transition duration-300 transform hover:scale-[1.03]
            max-w-xs w-full mx-auto shadow-inner shadow-white/5
            relative group  /* Added 'group' to enable hover effects on children */
        "
    >
        <Link
            to={linkedinUrl}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition duration-300 opacity-0 group-hover:opacity-100 invisible group-hover:visible"
        >
            <Linkedin className="w-5 h-5 text-cyan-400" /> 
        </Link>

        <div className="overflow-hidden aspect-square">
             <img
                src={imageUrl}
                alt={alt}
                className="w-full h-full object-cover transition-opacity duration-500 opacity-95 hover:opacity-100"
                onError={(e) => { 
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src = "https://placehold.co/280x280/0F172A/ffffff?text=Image%20Error"; 
                }}
            />
        </div>

        <div className="p-4 text-center">
            <div className="text-xl font-bold text-white mb-1 leading-tight hover:text-gray-400 transition duration-200">
                {name}
            </div>
            <p className="text-sm font-medium text-cyan-400/80">{role}</p>
        </div>
    </div>
);

const TeamMembers = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-8 md:p-12">
            <div className="max-w-7xl mx-auto py-10">

                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-cyan-400 text-sm tracking-widest uppercase font-semibold mb-2">
                        MEET THE TEAM
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        The Minds Behind Hynics
                    </h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-center">
                    {AllTeamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                            alt={member.alt}
                            linkedinUrl={member.linkedinUrl}
                        />
                    ))}
                </div>
            </div>
            <div className="h-10"></div>
        </div>
    );
};

export default TeamMembers;
