import { useEffect } from "react";
import heaven from "./../assets/heaven.jpg";
import jean from "./../assets/jean.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../index.css";

const InfoSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fly-in-left, .fly-in-right");
      const triggerBottom = window.innerHeight - 100;

      elements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom && boxTop > 0) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#EFDFC4] py-12 px-4 sm:px-0">
      {/* First Block - Original desktop layout preserved */}
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center mb-12 md:mb-24">
        {/* Image - Full width on mobile, original size on desktop */}
        <div className="fly-in-left w-full md:w-auto mb-8 md:mb-0">
          <img
            src={heaven}
            alt="Coffee Heaven"
            className="w-full max-w-[400px] h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg md:rotate-6 mx-auto"
          />
        </div>
        
        {/* Text - Centered on mobile, original position on desktop */}
        <div className="fly-in-right w-full md:w-auto md:ml-8 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">Coffee Heaven</h2>
          <p className="text-gray-700 leading-relaxed mb-6 md:mb-0">
            Our facility offers the best learning environment for students. <br className="hidden md:block"/>
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

      {/* Second Block - Original desktop layout preserved */}
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Text - Centered on mobile, original position on desktop */}
        <div className="fly-in-left w-full md:w-auto mb-8 md:mb-0 md:mr-8 text-center md:text-right order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">Jean's Coffee</h2>
          <p className="text-gray-700 leading-relaxed mb-6 md:mb-0">
            We aim to provide high-quality education, modern tools, and a nurturing<br className="hidden md:block"/>
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
        
        {/* Image - Full width on mobile, original size on desktop */}
        <div className="fly-in-right w-full md:w-auto order-1 md:order-2">
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