import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#fef3e7] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-[#3e2c1c] mb-4">Thank You!</h1>
      <p className="text-lg text-[#5a3e2c] mb-6">
        We’ve received your order. We will contact you shortly to confirm the details.
      </p>
      <Link
        to="/"
        className="bg-[#3e2c1c] text-white px-6 py-2 rounded hover:bg-[#5a3e2c] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
