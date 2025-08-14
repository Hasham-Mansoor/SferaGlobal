// src/components/MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import { FaChevronDown } from "react-icons/fa";

const MobileMenu = ({
  navItems,
  expandedMobileMenus,
  setExpandedMobileMenus,
  setIsMobileMenuOpen,
}) => {
  const toggleMobileSubmenu = (path) => {
    setExpandedMobileMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  return (
    <div className="md:hidden bg-white border-t shadow text-[#17374f] max-h-[80vh] overflow-y-auto">
      <div className="p-4 border-b">
        <Link
          to="/contact"
          className="block text-center bg-[#1e5d8a] text-white px-4 py-2 rounded-md hover:bg-[#144568]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>
      <ul className="flex flex-col p-4 space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <button
              className="flex justify-between items-center w-full font-medium"
              onClick={() => toggleMobileSubmenu(item.path)}
            >
              {item.label}
              <FaChevronDown className="ml-2" />
            </button>
            {expandedMobileMenus[item.path] && (
              <ul className="pl-4 py-2 space-y-1">
                {item.submenu.map((sub, subIndex) => (
                  <DropdownItem
                    key={subIndex}
                    item={sub}
                    basePath={item.path}
                    mobile
                    closeMenu={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
