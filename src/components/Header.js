import classNames from "classnames";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Cart from "../pages/Cart";

const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const navClasses = classNames(
    "flex justify-center items-center px-4 py-2 text-md h-12 rounded-xl font-extrabold hover:bg-green-700 bg-white text-black transition all ease-in"
  );
  const navigate = useNavigate();
  const { cart } = useCart();

  const { searchQuery, setSearchQuery } = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div className="fixed top-2 w-[100%] z-10 flex justify-around shadow-md shadow-black px-3 rounded-lg py-2">
      <div className="flex gap-2">
        <div className="flex justify-center items-center border rounded-2xl shadow-xl shadow-black border-black">
          <NavLink to="/" className="font-mono font-extrabold py-2 px-1">
            <span className="text-slate-700 text-3xl">Foo</span>
            <span className="text-red-600 text-xl">Reso</span>
          </NavLink>
        </div>
        {localStorage.getItem("authToken") ? (
          <div className="hidden sm:flex justify-evenly items-center">
            <NavLink
              to="/myorder"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "transparent" : "",
                  border: isActive ? "1px solid green " : "",
                  color: isActive ? "white" : "",
                };
              }}
              className="flex justify-center items-center px-4 py-2 text-md h-12 rounded-xl font-extrabold hover:bg-green-700 bg-white text-black transition all ease-in"
            >
              My Orders
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter Your Search Query"
          className=" focus:outline-none py-1 px-4 sm:font-medium md:text-lg w-48 sm:w-80 rounded-xl "
        />
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
            <button onClick={() => setCartVisible(true)} className={navClasses}>
              MyCart
              <span className="text-xs  px-1 text-white rounded-lg bg-red-500 flex justify-center items-center mb-4">
                {cart.length}
              </span>
            </button>
            {cartVisible ? <Cart onClose={() => setCartVisible(false)} /> : ""}
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
