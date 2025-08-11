import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and WhatsApp Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="h-16 overflow-visible">
            <img
              src={logo}
              alt="Sfera Global"
              className="h-16 scale-275 mb-4 ml-15"
            />
          </div>

          <a
            href="https://wa.me/923001234567" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-10 rounded-full transition duration-300 text-sm font-medium shadow-md"
          >
            <FaWhatsapp className="text-lg" />
            Chat with Us on WhatsApp
          </a>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 mt-6 md:mt-0">
            Our Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:underline hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:underline hover:text-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 mt-6 md:mt-0">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className=" hover:text-[#1e5d8a]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/return-refund-policy"
                className=" hover:text-[#1e5d8a]"
              >
                Return/Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className=" hover:text-[#1e5d8a]">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center text-sm py-4">
        © {new Date().getFullYear()} Sfera Global. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
