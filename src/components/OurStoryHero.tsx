
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStoryHero = () => {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/846241cd-64dd-42cb-87d6-477db0e379c3.png')", 
          backgroundPosition: "center 30%",
          filter: "brightness(0.6)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <div className="mb-4 text-heritage-100">
            <span className="uppercase tracking-wider text-sm font-medium">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We've been at this for a while.<br />
            And make loans happen.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
            Serving real estate investors nationwide, Red Sun Capital sets itself apart 
            with excellent relationship-driven service.
          </p>
          <Link 
            to="/get-funded" 
            className="inline-flex items-center btn-primary group"
          >
            <span>GET FUNDED</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStoryHero;
