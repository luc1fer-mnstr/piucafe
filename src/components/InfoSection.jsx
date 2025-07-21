import { useEffect } from "react";
import heaven from "./../assets/heaven.jpg";
import jean from "./../assets/jean.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../index.css"

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
        el.classList.remove("active"); // Remove when scrolled away
      }
    });
  };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <section className="bg-[#EFDFC4] py-12">
      {/* First Block: Image Left, Text Right */}
      <div className="container mx-auto flex justify-around items-center items-center mb-12 md:px-0">
        <div className="fly-in-left">
            <img
            src={heaven}
            alt="Description 1"
            className="w-[400px] h-[600px] object-cover rounded-lg shadow-lg rotate-6"
            />
        </div>
        <div className="md:ml-8 mt-6 md:mt-0 fly-in-right">
          <h2 className="text-5xl text-black font-bold mb-4">Coffee Heaven</h2>
          <p className="text-gray-700 leading-relaxed">
            Our facility offers the best learning environment for students. <br/>Clean,
            quiet, and equipped with all necessary resources to enhance your
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

      {/* Second Block: Text Left, Image Right */}
      <div className="container mx-auto flex justify-around items-center items-center mb-12 md:px-0">
        <div className="md:mr-8 mt-6 md:mt-0 text-right fly-in-left">
          <h2 className="text-5xl text-black font-bold mb-4">Jean's Coffee</h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to provide high-quality education, modern tools, and a nurturing<br/>
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
        <div className="fly-in-right">
            <img
            src={jean}
            alt="Description 2"
            className="w-[400px] h-[600px] object-cover rounded-lg shadow-lg order-1 md:order-2 -rotate-6"
            />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
