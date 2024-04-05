import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navClasses = classNames(
    "p-3 rounded-xl font-bold text-white hover:bg-red-700"
  );
  return (
    <div className="fixed top-2 z-10 flex justify-between w-screen ">
      <div className="ml-4">
        <NavLink to="/">
          <img
            src="./logo.jpg"
            alt="no"
            width={90}
            height={90}
            className="rounded-xl shadow-lg object-center"
          />
        </NavLink>
      </div>
      <ul className="hidden sm:flex justify-evenly items-center mr-10 gap-4">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                fontWeight: isActive ? "700" : "",
                backgroundColor: isActive ? "red" : "",
              };
            }}
            className={navClasses}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                fontWeight: isActive ? "700" : "",
                backgroundColor: isActive ? "red" : "",
              };
            }}
            className={navClasses}
          >
            SignUp
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                fontWeight: isActive ? "700" : "",
                backgroundColor: isActive ? "red" : "",
              };
            }}
            className={navClasses}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
