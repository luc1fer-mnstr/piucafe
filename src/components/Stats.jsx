// src/components/Stats.jsx

const Stats = () => {
  return (
    <section className="w-full py-8 px-6 md:px-12 lg:px-24 bg-[#dbb288]">
      <div className="flex flex-col sm:flex-row justify-around items-center text-center space-y-8 sm:space-y-0">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-black">50+</span>
          <span className="text-gray-100 text-lg">ITEM OF COFFEE</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-black">20+</span>
          <span className="text-gray-100 text-lg">Order Running</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-black">2k+</span>
          <span className="text-gray-200 text-lg">Happy Customer</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
