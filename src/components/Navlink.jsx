import React from "react";
import { useLocation, Link } from "react-router-dom";

export const Navlink = ({ path, label }) => {
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <li>
      <Link to={path} className={isActive && "active"}>
        {label}
      </Link>
    </li>
  );
};
