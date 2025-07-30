// src/components/TopBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const TopBar = ({
  logo,
  searchQuery,
  setSearchQuery,
  handleSearch,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-38 mt-3 w-auto object-contain" />
      </Link>

      <div className="hidden md:flex flex-1 justify-center px-4 mt-3 text-[12px]">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full max-w-md px-4 py-2 rounded-md text-black focus:outline-none"
        />
      </div>

      <div className="hidden md:flex text-[14px] mt-3 font-semibold">
        <Link
          to="/contact-us"
          className="bg-[#ffffff] px-4 py-2 rounded-md hover:bg-[#144568] hover:text-white text-[#17374f]"
        >
          Contact Us
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
