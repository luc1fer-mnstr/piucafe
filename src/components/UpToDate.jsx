import { ArrowRight } from "lucide-react";

const UpToDate = () => {
  return (
    <div className="bg-[#ddb288] py-12 px-4 md:px-16 text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Stay Up To Date On <br /> All News and Offers
          </h2>
        </div>

        {/* Right Side: Paragraph and Input */}
        <div className="text-center md:text-right w-full md:w-auto">
          <p className="uppercase text-sm md:text-base mb-4 max-w-md mx-auto md:mx-0">
            Be the first one to know about new collections, special events, and what's going on at kitchen
          </p>
          <div className="flex items-center bg-white overflow-hidden shadow-md w-full max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-6 py-3 text-gray-700 text-sm outline-none"
            />
            <button className="bg-black text-white px-4 py-3 hover:bg-gray-800 transition-all duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpToDate;
