// src/pages/HomePage.jsx
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import InfoSection from "../components/InfoSection";
import BestSelling from "../components/BestSelling";
import CustomerReviews from "../components/CustomerReview";
import UpToDate from "../components/UpToDate";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="text-white font-['Inter']">
      <Banner />
      <Stats />
      <InfoSection />
      <BestSelling />
      <CustomerReviews />
      <UpToDate />
    </div>
  );
};

export default HomePage;
