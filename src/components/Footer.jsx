import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';



const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Problem & Solution', href: '/problem-solution' },
    { name: 'Hydrogen Calculator', href: '/calculator' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialIcons = [
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Facebook, href: 'https://facebook.com' },
  ];

  return (

    <footer className="bg-black text-white pb-6 border-t-1 pt-10 border-white/30 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          <div className="flex-1 min-w-[250px]">
            <div className='text-cyan-400 font-bold flex items-center mb-4'>
              <img
                src="https://www.hynics.in/lovable-uploads/logo.png"
                alt="Hynics Logo"
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <span>Hynics</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Delivering 24/7 high-speed hydrogen supply with mobile and fixed fuel stations for a sustainable future.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, index) => (
                <Link key={index} to={item.href} className="text-gray-400 hover:text-cyan-400 transition duration-150">
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition duration-150 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                <p className='hover:text-cyan-400 transition'>DTU Innovation and Incubation Foundation, Delhi</p>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={18} className="mr-3 flex-shrink-0 text-cyan-400" />
                <p className="hover:text-cyan-400 transition">+91-80762 76374</p>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={18} className="mr-3 flex-shrink-0 text-cyan-400" />
                <p className="hover:text-cyan-400 transition">contact@hynics.com</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&#169; 2025 Hynics. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
