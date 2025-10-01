import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HamburgerIcon from "@/assets/HamburgerIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Problem & Solution", href: "/problem-solution" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Industries", href: "/industries" },
    { name: "Calculator", href: "/calculator" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={"/"}className="flex-shrink-0 flex items-center gap-1 h-10 w-30">
            <img
              src="https://www.hynics.in/lovable-uploads/logo.png"
              alt="Hynics Logo"
              className="h-10 w-auto"
            />
            <span className="text-cyan-400 text-2xl font-bold">Hynics</span>
          </Link>

          {/* Routes */}
          <div className="hidden xl:flex items-center justify-center flex-1 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:no-underline"

              >
                <Button
                  variant="link"
                  className="cursor-pointer text-[#cccccc] hover:text-cyan-400 transition-colors duration-200 text-[16px] font-medium"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden xl:flex items-center">
            <Link to="/contact">
              <Button
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-5 rounded-full font-semibold transition-all duration-200 cursor-pointer"
                size="lg"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none"
            >
                <HamburgerIcon isOpen={isOpen}/>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      {isOpen && (
        <div className="xl:hidden backdrop-blur-md bg-black/80 border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-white hover:text-cyan-400 hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Get Started */}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-5 rounded-full font-semibold transition-all duration-200 mt-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
