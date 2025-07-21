import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import customer1 from "../assets/customer.jpg";
import customer2 from "../assets/customer1.jpg";
import customer3 from "../assets/customer2.jpg";

const reviews = [
  {
    image: customer1,
    name: "Alice Johnson",
    text: "The coffee was rich and full of flavor. The atmosphere is amazing!",
    rating: 5,
  },
  {
    image: customer2,
    name: "David Lee",
    text: "Great service and the espresso was just perfect. Will come again!",
    rating: 4,
  },
  {
    image: customer3,
    name: "Sophia Kim",
    text: "Loved the vibe! Highly recommended for coffee lovers.",
    rating: 5,
  },
];



const CustomerReviews = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, 5000); // 5 seconds

  return () => clearInterval(interval); // Clean up on unmount
}, []);

  return (
    <div className="bg-[#e7d7bc] py-12 px-4 text-center">
      <h2 className="text-5xl font-bold mb-16 text-black">What Our Customers Say</h2>

      <div className="max-w-2xl mx-auto relative">
        <div className="bg-white w-full rounded-2xl shadow-lg px-16 py-8 transition-all duration-500">
          <img
            src={reviews[current].image}
            alt={reviews[current].name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-700 italic mb-4">
            “{reviews[current].text}”
          </p>
          <div className="flex justify-center mb-2">
            {[...Array(reviews[current].rating)].map((_, i) => (
              <Star key={i} className="text-yellow-500 fill-yellow-500 w-5 h-5" />
            ))}
          </div>
          <p className="text-lg font-semibold text-black">
            {reviews[current].name}
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 text-gray-500 hover:text-black"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 text-gray-500 hover:text-black"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
