import { Button } from "@/components/ui/button";
import { ChartBar, Users, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-business-50 min-h-[calc(100vh-76px)] flex items-center">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="heading-1 text-gray-900 mb-6">
              Accelerate Your Business Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Strategic consulting solutions that drive results. We help businesses optimize operations, 
              increase revenue, and achieve sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Schedule a Consultation
              </a>
              <a href="#services" className="py-2 px-6 border border-business-600 text-business-600 rounded-md font-semibold hover:bg-business-50 transition-colors duration-300">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fadeInUp animate-delay-200">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/photo-1519389950473-47ba0277781c"
                alt="Team Collaboration"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-business-600/10"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <ChartBar className="text-business-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Strategic Planning</h3>
              <p className="text-gray-600">Develop roadmaps for sustainable business growth</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <Users className="text-business-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Team Development</h3>
              <p className="text-gray-600">Build high-performing teams that drive success</p>
            </div>
            
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/photo-1460925895917-afdab827c52f"
                alt="Business Analytics"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-business-600/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
