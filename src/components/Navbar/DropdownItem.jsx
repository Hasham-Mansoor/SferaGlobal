// // src/components/DropdownItem.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { FaChevronRight } from "react-icons/fa";

// const DropdownItem = ({
//   item,
//   basePath = "",
//   mobile = false,
//   depth = 1,
//   onHover = () => {},
//   isOpen = false,
//   closeMenu = () => {},
// }) => {
//   const hasChildren = item.submenu && item.submenu.length > 0;
//   const fullPath = `${basePath}/${item.path}`.replace(/\/+/g, "/");
//   const [localOpen, setLocalOpen] = useState(false);

//   return (
//     <li
//       className="relative group"
//       onMouseEnter={!mobile && hasChildren ? onHover : undefined}
//     >
//       <Link
//         to={`/category${fullPath}`}
//         className="flex items-center text-[13px] justify-between hover:text-[#1e5d8a] w-60 px-2 py-1.5"
//         onClick={(e) => {
//           if (mobile && hasChildren) {
//             e.preventDefault();
//             setLocalOpen(!localOpen);
//           } else if (mobile) {
//             closeMenu();
//           }
//         }}
//       >
//         {item.label}
//         {hasChildren }
//       </Link>

//       {hasChildren && !mobile && isOpen && (
//         <ul
//           className={`absolute bg-white text-[#17374f] text-[13px] shadow-md w-60 p-2 z-50 left-full top-0 ml-2`}
//         >
//           {item.submenu.map((child, index) => (
//             <DropdownItem
//               key={index}
//               item={child}
//               basePath={fullPath}
//               depth={depth + 1}
//               onHover={() => {}}
//               isOpen={false}
//             />
//           ))}
//         </ul>
//       )}

//       {hasChildren && mobile && localOpen && (
//         <ul className="pl-4 py-2">
//           {item.submenu.map((child, index) => (
//             <DropdownItem
//               key={index}
//               item={child}
//               basePath={fullPath}
//               mobile
//               closeMenu={closeMenu}
//             />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

// export default DropdownItem;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DropdownItem = ({
  item,
  basePath = "",
  mobile = false,
  depth = 1,
  onHover = () => {},
  isOpen = false,
  closeMenu = () => {},
}) => {
  const hasChildren = item.submenu && item.submenu.length > 0;
  const [localOpen, setLocalOpen] = useState(false);
  const navigate = useNavigate();

  const fullPath = `${basePath}/${item.path}`.replace(/\/+/g, "/");
  const isTopLevel = depth === 1;
  const finalPath =
    isTopLevel && item.path.startsWith("/")
      ? item.path
      : `/category${fullPath}`;

  const handleClick = (e) => {
    if (mobile) {
      if (hasChildren) {
        e.preventDefault();
        setLocalOpen(!localOpen);
        navigate(finalPath); // Navigate even when submenu toggles
      } else {
        closeMenu();
        navigate(finalPath);
      }
    } else {
      // On desktop: navigate on click
      e.preventDefault();
      navigate(finalPath);
    }
  };

  return (
    <li
      className="relative group "
      onMouseEnter={!mobile && hasChildren ? onHover : undefined}
    >
      <button
        onClick={handleClick}
        className="flex items-center justify-between text-[13px]  hover:text-[#1e5d8a] w-60 px-2 py-1.5"
      >
        <span className="text-sm font-medium cursor-pointer">{item.label}</span>
      </button>

      {/* Desktop dropdown */}
      {hasChildren && !mobile && isOpen && (
        <ul className="absolute left-full top-0 ml-2 w-60 p-2 z-50 bg-white text-[#17374f] shadow-md text-[13px]">
          {item.submenu.map((child, index) => (
            <DropdownItem
              key={index}
              item={child}
              basePath={fullPath}
              depth={depth + 1}
              onHover={() => {}}
              isOpen={false}
            />
          ))}
        </ul>
      )}

      {/* Mobile dropdown */}
      {hasChildren && mobile && localOpen && (
        <ul className="pl-4 py-2">
          {item.submenu.map((child, index) => (
            <DropdownItem
              key={index}
              item={child}
              basePath={fullPath}
              mobile
              closeMenu={closeMenu}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownItem;
