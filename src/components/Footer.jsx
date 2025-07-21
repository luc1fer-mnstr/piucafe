import { Facebook, Instagram, Youtube } from "lucide-react";
import vd from "../assets/vd2.mp4"

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b-2 py-8" style={{borderColor: "#ddb288"}}>
       
        <div className="border-r-2" style={{ borderColor: "#ddb288" }}>
          <div className="flex justify-left">
            <h2 className="bg-[#ddb288] p-12 border-2 border-white text-3xl mb-4">
            PIU Cafe
          </h2>
          </div>
          <p className="text-gray-300">
            Enjoy Better and Better <br /> Quality Coffee With PIU
          </p>
        </div>

        {/* Contact Info */}
        <div className="border-r-2" style={{ borderColor: "#ddb288" }}>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <ul className="text-gray-300 space-y-1 mb-2">
            <li>Email: piu@gmail.com</li>
            <li>Call Us: 0999999999</li>
            <li>Text Us: 0999999999</li>
          </ul>
          <a
            href="#"
            className="text-blue-400 underline hover:text-blue-500 transition"
          >
            19th, Nansahe, Mandalay
          </a>
        </div>

        {/* Social + Video */}
        <div>
          <div className="mb-3">
            {/* Example placeholder video */}
            <video width="100%" height="100" controls autoPlay muted className="rounded-lg">
              <source src={vd} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <ul className="flex gap-4 text-gray-300">
            <li>
              <a href="#" aria-label="Facebook">
                <Facebook className="hover:text-white" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <Instagram className="hover:text-white" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <Youtube className="hover:text-white" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="TikTok">
                <Facebook className="hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-10">
        &copy; 2025 by Lucifer. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
