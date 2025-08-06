import heaven from "./../assets/heaven.jpg";
import jean from "./../assets/jean.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../index.css";

const InfoSection = () => {
  return (
    <section className="bg-[#EFDFC4] py-12 px-4 sm:px-0">
      {/* First Block */}
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center mb-12 md:mb-24">
        {/* Image */}
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <img
            src={heaven}
            alt="Coffee Heaven"
            className="w-full max-w-[400px] h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg md:rotate-6 mx-auto"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-auto md:ml-8 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">Coffee Heaven</h2>
          <p className="text-gray-700 leading-relaxed mb-6 md:mb-0">
            Our facility offers the best learning environment for students. <br className="hidden md:block" />
            Clean, quiet, and equipped with all necessary resources to enhance your
            experience.
          </p>
          <Link
            to="#"
            className="bg-black text-white px-4 py-2 mt-4 inline-flex items-center gap-2 rounded transition-transform duration-200 hover:translate-x-2"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Second Block */}
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Text */}
        <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-8 text-center md:text-right order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">Jean's Coffee</h2>
          <p className="text-gray-700 leading-relaxed mb-6 md:mb-0">
            We aim to provide high-quality education, modern tools, and a nurturing<br className="hidden md:block" />
            community to help students succeed and grow in their academic journey.
          </p>
          <Link
            to="#"
            className="bg-black text-white px-4 py-2 mt-4 inline-flex items-center gap-2 rounded transition-transform duration-200 hover:translate-x-2"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-auto order-1 md:order-2">
          <img
            src={jean}
            alt="Jean's Coffee"
            className="w-full max-w-[400px] h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg md:-rotate-6 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
