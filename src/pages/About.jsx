import leftImg from "../assets/shop-left.jpg";
import rightImg from "../assets/shop-right.jpg";

const About = () => {
  return (
    <div className="bg-[#f0e5d8] min-h-screen relative px-6 py-12 text-[#3e2c1c] overflow-hidden">
      {/* Triangle images - LEFT */}
      <div className="absolute bottom-0 left-0 flex flex-col gap-2 z-0">
        <img src={leftImg} alt="shop" className="w-32 rotate-[-5deg] opacity-90 translate-x-4" />
        <img src={leftImg} alt="shop" className="w-28 rotate-[-10deg] opacity-80 translate-x-6" />
        <img src={leftImg} alt="shop" className="w-24 rotate-[-15deg] opacity-70 translate-x-8" />
        <img src={leftImg} alt="shop" className="w-20 rotate-[-20deg] opacity-60 translate-x-10" />
        <img src={leftImg} alt="shop" className="w-16 rotate-[-25deg] opacity-50 translate-x-12" />
      </div>

      {/* Triangle images - RIGHT */}
      <div className="absolute bottom-0 right-0 flex flex-col gap-2 z-0">
        <img src={rightImg} alt="shop" className="w-32 rotate-[5deg] opacity-90 -translate-x-4" />
        <img src={rightImg} alt="shop" className="w-28 rotate-[10deg] opacity-80 -translate-x-6" />
        <img src={rightImg} alt="shop" className="w-24 rotate-[15deg] opacity-70 -translate-x-8" />
        <img src={rightImg} alt="shop" className="w-20 rotate-[20deg] opacity-60 -translate-x-10" />
        <img src={rightImg} alt="shop" className="w-16 rotate-[25deg] opacity-50 -translate-x-12" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold">About Our Coffee Shop</h1>

        <p className="text-lg">
          Welcome to our cozy little coffee corner! We're more than just a coffee shop — we're a space for people to slow down, connect, and enjoy the simple joys of a great cup of coffee.
        </p>

        <p className="text-lg">
          Our journey started with a passion for quality brews and homemade treats. Every item on our menu is carefully prepared using fresh ingredients and a whole lot of love.
        </p>

        <p className="text-lg">
          Whether you're stopping by for your morning espresso, catching up with friends, or working on your next big idea — we’re here to make you feel at home.
        </p>

        <p className="text-lg">
          We’re committed to supporting local producers and creating a warm, welcoming environment for all. Your comfort and satisfaction are always our top priorities.
        </p>

        <p className="text-lg font-semibold">
          ☕ Come visit us anytime. We can't wait to serve you.
        </p>

        <div className="mt-6 text-sm text-[#5a3e2c]">
          Location: Corner of Peace Street & Sunset Lane, Yangon<br />
          Open Daily: 8:00 AM – 8:00 PM
        </div>
      </div>
    </div>
  );
};

export default About;
