import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navClasses = classNames(
    "flex justify-center items-center px-3 py-1 text-md h-12 w-24 rounded-xl font-extrabold hover:bg-green-700 bg-white text-black transition all ease-in"
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div className="fixed top-2 left-8 md:left-16 sm:left-24 z-10 flex justify-between w-[85vw] shadow-md shadow-black px-3 rounded-lg py-2">
      <div className="flex justify-center items-center border rounded-2xl shadow-xl shadow-black border-black">
        <NavLink to="/" className="font-mono font-extrabold py-2 px-1">
          <span className="text-slate-700 text-3xl">Foo</span>
          <span className="text-red-600 text-xl">Reso</span>
        </NavLink>
      </div>
      <div className="hidden md:flex justify-center items-center gap-4">
        <div className="hidden sm:flex justify-evenly items-center">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "transparent" : "",
                border: isActive ? "1px solid green " : "",
                color: isActive ? "white" : "",
              };
            }}
            className={navClasses}
          >
            Home
          </NavLink>
        </div>
        {localStorage.getItem("authToken") ? (
          <div className="flex gap-4">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "transparent" : "",
                  border: isActive ? "1px solid green " : "",
                  color: isActive ? "white" : "",
                };
              }}
              className={navClasses}
            >
              MyCart
            </NavLink>
            <button
              onClick={handleLogout}
              className={`${navClasses} bg-red-300`}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <NavLink
              to="/signup"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "transparent" : "",
                  border: isActive ? "1px solid green " : "",
                  color: isActive ? "white" : "",
                };
              }}
              className={navClasses}
            >
              SignUp
            </NavLink>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "transparent" : "",
                  border: isActive ? "1px solid green " : "",
                  color: isActive ? "white" : "",
                };
              }}
              className={navClasses}
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
