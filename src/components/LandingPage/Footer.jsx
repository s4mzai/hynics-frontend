import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0047AB] to-[#1CA9C9] p-12 md:p-20">
      <div className="max-w-4xl mx-auto text-center p-8 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready to Transform Your Hydrogen Future?
        </h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our mobile and fixed hydrogen fuel stations and how they can benefit your business or community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/contact">
            <Button className="w-full bg-cyan-400 text-black font-semibold py-5 px-8 rounded-full hover:bg-cyan-500 transition-transform transform">
              Get Started
            </Button>
          </Link>

          <Link to="/calculator">
            <Button className="w-full border text-white font-semibold py-5 px-8 rounded-full bg-white text-black hover:bg-white/80">
              Try Calculator
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const FooterContent = () => {
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
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-10">

          <div className="space-y-4">
            <div className='text-cyan-400 font-bold flex items-center'>
                <img
                src="https://www.hynics.in/lovable-uploads/logo.png"
                alt="Hynics Logo"
                className="w-8 h-8 rounded-full object-cover"
                />
                <span>Hynics</span>
            </div>
            <p className="text-gray-400 text-sm">
              Delivering 24/7 high-speed hydrogen supply with mobile and fixed fuel stations for a sustainable future.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialIcons.map((item, index) => (
                <Link key={index} to={item.href} className="text-gray-400 hover:text-cyan-400 transition duration-150">
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
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

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                <p>DTU Innovation and Incubation Foundation, Delhi</p>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={18} className="mr-3 flex-shrink-0 text-cyan-400" />
                <p className="hover:text-white transition">+91-80762 76374</p>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={18} className="mr-3 flex-shrink-0 text-cyan-400" />
                <p className="hover:text-white transition">contact@hynics.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
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

const FooterSection = () => {
  return (
    <section className="w-full">
      <CallToAction />
      <FooterContent />
    </section>
  );
};

export default FooterSection;
