import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
      <section className="bg-black text-white flex items-center min-h-[40rem]">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-10 xl:gap-40">
  
            {/* Left Column */}
            <div className="flex-[0.5] text-center md:text-left">
              <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-cyan-400">24/7</span> High-speed Hydrogen Supply at Your Doorstep
              </h1>
  
              <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl lg:text-xl">
                Refuel with hydrogen, drive with confidence, and pave the way for a cleaner, greener, and more sustainable future of transportation.
              </p>
  
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link to={"/contact"} className="flex-none">
                    <Button className=" w-full bg-cyan-400 text-black font-semibold py-5 px-8 rounded-full hover:bg-cyan-500 transition-transform transform">
                    Get Started
                    </Button>
                </Link>
                <Link to={"/calculator"} className="flex-none">
                    <Button className="w-full border border-gray-600 text-white font-semibold py-5 px-8 rounded-full hover:bg-white hover:text-black transition-colors">
                    Try Calculator
                    </Button>
                </Link>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="flex-[0.5] flex justify-center md:justify-end">
              <div className="bg-white/30 w-[90%] h-90">
                *Hero Section Image Here
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  