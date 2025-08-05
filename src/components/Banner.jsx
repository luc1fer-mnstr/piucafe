import { Link } from "react-router-dom";
import vd from "./../assets/vd1.mp4";

const Banner = () => {
  return (
    <main className="relative h-[100vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src={vd} 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto h-full px-6 md:px-12 flex flex-col lg:flex-row justify-around items-center relative z-10">
        <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover The <br /> Art Of Perfect <br /> Coffee
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-red-500 border border-white text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 hover:bg-opacity-20 transition duration-300 flex items-center justify-center space-x-2">
              <Link to="/menu"><span>Order Now</span></Link>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              Explore More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          {/* You can keep this empty or add some decorative elements */}
        </div>
      </div>
    </main>
  );
};

export default Banner;