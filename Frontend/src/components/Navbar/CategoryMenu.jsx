// src/components/CategoryMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import DropdownItem from "./DropdownItem";

const CategoryMenu = ({
  navItems,
  openMenu,
  setOpenMenu,
  openSubIndex,
  setOpenSubIndex,
  dropdownRef,
}) => {
  return (
    <div className="hidden md:block bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center space-x-6 h-14 ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => {
                setOpenMenu(null);
                setOpenSubIndex(null);
              }}
            >
              <button className="font-semibold text-[14px] hover:text-[#1e5d8a]">
                {item.label}
              </button>
              <AnimatePresence>
                {openMenu === index && (
                  <motion.ul
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white text-[#17374f] shadow-md z-50 w-64 p-2"
                  >
                    {item.submenu.map((sub, subIndex) => (
                      <DropdownItem
                        key={subIndex}
                        item={sub}
                        basePath={item.path}
                        depth={1}
                        onHover={() => setOpenSubIndex(subIndex)}
                        isOpen={openSubIndex === subIndex}
                      />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
