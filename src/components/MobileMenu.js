import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { GiCrossedBones } from "react-icons/gi";
import Cart from "../pages/Cart";
import { useCart } from "../Context/CartContext";
import classNames from "classnames";

export default function MobileMenu() {
  const [visible, setVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useCart();

  const { cart } = useCart();
  const navClasses = classNames("py-2 px-10 rounded-lg text-lg");
  const divClasses = classNames(
    "text-center shadow shadow-black py-2 rounded-lg"
  );
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="flex gap-32 justify-around items-center">
      <div className="flex justify-center items-center border rounded-2xl shadow-xl shadow-black border-black">
        <NavLink to="/" className="font-mono font-extrabold py-2 px-1">
          <span className="text-slate-700 text-3xl">Foo</span>
          <span className="text-red-600 text-xl">Reso</span>
        </NavLink>
      </div>
      <div className="relative p-2">
        <div
          className={`${
            visible === false ? "w-0 overflow-hidden" : "w-80 sm:w-96"
          } transition-all ease-in delay-150 absolute right-[-5rem] top-[-1rem] sm:right-[-9rem] h-screen bg-indigo-300 opacity-90 p-2 `}
        >
          <div className="flex justify-end w-60 sm:w-72">
            <button onClick={() => setVisible(false)} className="pt-4">
              <GiCrossedBones className="text-4xl text-red-500" />
            </button>
          </div>
          {visible ? (
            <div className="flex justify-center h-10 items-center w-60 sm:w-72 my-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Your Search Query"
                className=" focus:outline-none py-1 px-2 sm:font-medium md:text-lg md:w-80 rounded-xl "
              />
            </div>
          ) : (
            ""
          )}
          {visible ? (
            <div className="flex flex-col mx-4 gap-4 w-60 sm:w-72">
              <div className={divClasses}>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "transparent" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  className={navClasses}
                >
                  Home
                </NavLink>
              </div>
              {localStorage.getItem("authToken") ? (
                <div className="flex flex-col gap-4">
                  <div className={`${divClasses}`}>
                    <button
                      onClick={() => setCartVisible(true)}
                      className={navClasses}
                    >
                      <div className="flex gap-3">
                        MyCart
                        <span className="text-md px-2 text-white rounded-lg bg-red-500 flex justify-center items-center">
                          {cart.length}
                        </span>
                      </div>
                    </button>
                  </div>
                  {cartVisible ? (
                    <Cart onClose={() => setCartVisible(false)} />
                  ) : (
                    ""
                  )}

                  <div className={`${divClasses} bg-red-700`}>
                    {" "}
                    <button onClick={handleLogout} className={`${navClasses}`}>
                      Logout
                    </button>
                  </div>
                  <div className={divClasses}>
                    <NavLink
                      to="/myorder"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "transparent" : "",
                          color: isActive ? "white" : "",
                        };
                      }}
                      className={navClasses}
                    >
                      My Orders
                    </NavLink>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className={divClasses}>
                    <NavLink
                      to="/signup"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "transparent" : "",
                          color: isActive ? "white" : "",
                        };
                      }}
                      className={navClasses}
                    >
                      SignUp
                    </NavLink>
                  </div>
                  <div className={divClasses}>
                    <NavLink
                      to="/login"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "transparent" : "",
                          color: isActive ? "white" : "",
                        };
                      }}
                      className={navClasses}
                    >
                      Login
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="">
          <button type="button" onClick={() => setVisible(true)}>
            <MdMenuOpen className="text-4xl text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
