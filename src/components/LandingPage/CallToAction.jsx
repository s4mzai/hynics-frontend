import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
      <div className="w-full  md:p-20 mb-16">
        <div className="max-w-4xl mx-auto text-center p-8 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to Transform Your Hydrogen Future?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our mobile and fixed hydrogen fuel stations and how they can benefit your business or community.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <Button className="w-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold py-5 px-8 rounded-full hover:bg-cyan-500 transition-transform transform">
                Get Started
              </Button>
            </Link>
  
            <Link to="/calculator">
              <Button className="w-full cursor-pointer border font-semibold py-5 px-8 rounded-full bg-white text-black hover:bg-white/80">
                Try Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
};
export default CallToAction;