// src/components/Header.tsx

import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

{
  /* props*/
}
interface HeaderProps {
  backTo?: string;
  backText?: string;
  showIcons?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  backTo,
  backText,
  showIcons = true,
}) => {
  return (
    <header className="flex items-center justify-between">
      {" "}
      {backTo && backText ? (
        <Link to={backTo}>
          <div className="flex items-center space-x-2 text-sm text-green-500">
            <IoIosArrowRoundBack size={20} className="mt-1" />
            <span>{backText}</span>
          </div>
        </Link>
      ) : (
        <div></div>
      )}
      {showIcons && (
        <div className="flex items-center space-x-3">
          <FaBell size={16} className="text-gray-600" />
          <RiArrowDropDownLine size={30} className="text-gray-600" />
        </div>
      )}
    </header>
  );
};

export default Header;
