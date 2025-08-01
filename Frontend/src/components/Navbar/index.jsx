// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import navItems from "./navItem";
import logo from "../../assets/images/logo.png";
import TopBar from "./TopBar";
import CategoryMenu from "./CategoryMenu";
import MobileMenu from "./MobileMenu.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    setOpenMenu(null);
    setOpenSubIndex(null);
    setIsMobileMenuOpen(false);
    setExpandedMobileMenus({});
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenMenu(null);
        setOpenSubIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 text-[#1e5d8a]">
      <TopBar
        logo={logo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <CategoryMenu
        navItems={navItems}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openSubIndex={openSubIndex}
        setOpenSubIndex={setOpenSubIndex}
        dropdownRef={dropdownRef}
      />
      {isMobileMenuOpen && (
        <MobileMenu
          navItems={navItems}
          expandedMobileMenus={expandedMobileMenus}
          setExpandedMobileMenus={setExpandedMobileMenus}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
