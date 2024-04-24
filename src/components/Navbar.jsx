import React from "react";

import { Navlink } from "./Navlink";
import { navLinks } from "../constants/index";

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <a href="#" className="logo">
          Foodio
        </a>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <Navlink key={index} path={link.path} label={link.label} />
          ))}
        </ul>
        <button className="btn-login">Se connecter</button>
      </div>
    </nav>
  );
};
