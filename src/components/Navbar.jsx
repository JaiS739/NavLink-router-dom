import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "activeLink" : "";
        }}
        to="/"
      >
        Home
      </NavLink>
      <nbsp />
      <NavLink
        className={({ isActive }) => {
          return isActive ? "activeLink" : "";
        }}
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};
