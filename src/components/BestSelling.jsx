import { Link } from "react-router-dom";
import cappuccino from "../assets/cappuccino.jpg";
import americano from "../assets/americano.jpg";
import espresso from "../assets/espresso.jpg";
 import { useEffect } from "react";
const BestSelling = () => {

 

useEffect(() => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // optional: remove if you want one-time animation
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}, []);

  return (
    <div className="bg-[#DDB288] py-16 px-4 md:px-12">
      <h2 className="text-5xl font-bold text-center text-black mb-4">Best Selling Items</h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla exercitationem, omnis excepturi delectus laudantium dolorum incidunt ullam.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Item 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
          <img src={cappuccino} alt="Cappuccino" className="w-full h-72 object-cover rounded-md mb-4" />
          <h3 className="text-3xl text-black font-semibold mb-2">Cappuccino</h3>
          <hr className="h-[20px]"/>
          <Link
            to="/menu"
            className="inline-block mt-2 bg-black text-white px-4 py-2 rounded hover:translate-x-1 transition-transform duration-300"
          >
            Order Now →
          </Link>
        </div>

        {/* Item 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
          <img src={americano} alt="Americano" className="w-full h-72 object-cover rounded-md mb-4" />
          <h3 className="text-3xl text-black font-semibold mb-2">Americano</h3>
          <hr className="h-[20px]"/>
          <Link
            to="/menu"
            className="inline-block mt-2 bg-black text-white px-4 py-2 rounded hover:translate-x-1 transition-transform duration-300"
          >
            Order Now →
          </Link>
        </div>

        {/* Item 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
          <img src={espresso} alt="Espresso" className="w-full h-72 object-cover rounded-md mb-4" />
          <h3 className="text-3xl text-black font-semibold mb-2">Espresso</h3>
          <hr className="h-[20px]"/>
          <Link
            to="/menu"
            className="inline-block mt-2 bg-black text-white px-4 py-2 rounded hover:translate-x-1 transition-transform duration-300"
          >
            Order Now →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
