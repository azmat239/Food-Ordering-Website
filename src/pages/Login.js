import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [width, setWidth] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: formData.password,
        email: formData.email,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("email", formData.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    } else {
      alert("InValid Details");
    }
  };
  const widthSet = () => {
    setWidth(96);
  };
  useEffect(() => {
    widthSet();
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const inputClasses = classNames(
    "outline-none py-1 px-4 md:w-[30vw] text-lg rounded-lg shadow-lg shadow-indigo-600 "
  );
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-screen  h-[90vh] md:h-screen bg-hero bg-cover bg-no-repeat">
      <div className="flex">
        <div
          className={`${
            width === 0 ? "" : "px-4 pb-2 pt-10 my-4"
          }  hidden md:flex flex-col items-center h-96 rounded-l-xl bg-emerald-500 transition-all ease-in delay-1000 w-${width} overflow-hidden  `}
        >
          <h1 className="font-extrabold text-white text-center w-60 ">
            {width === 0 ? (
              ""
            ) : (
              <>
                <span className="text-3xl text-slate-800">Welcome To</span> Our{" "}
                <span className="text-indigo-500 text-5xl">FooReso</span>
              </>
            )}
          </h1>
          {width === 0 ? (
            ""
          ) : (
            <div className="hidden md:flex flex-col text-2xl">
              <span className="text-lg text-slate-800 font-black text-center">
                Welcome
              </span>
              <span className="text-md text-slate-600 font-extrabold text-center">
                To Enjoy Our Food Delivery Services
              </span>
              <span className="text-md  text-slate-500 font-extrabold text-center">
                Provide The Details and Happy Order !!!!
              </span>
              <span className="text-sm text-slate-500 text-center">
                Best Food present In Our Locality
              </span>
            </div>
          )}
        </div>
        <div className="transition-all ease-in delay-1000 py-10 px-6 rounded-r-lg shadow-lg shadow-black bg-emerald-200">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center font-bold text-xl text-red-700">
              LOGIN
            </h1>
            <p className="text-center text-md text-white mb-4">
              Enter Your Details
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="Enter Your Email"
                  onChange={onInputChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={onInputChange}
                  placeholder="Enter Password"
                  className={inputClasses}
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="flex gap-4 my-4 justify-center">
              <button
                type="submit"
                className="px-2 py-1 bg-green-500 text-md rounded-md font-bold md:text-lg hover:bg-green-300"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="px-4 py-2 bg-red-500 text-md rounded-md font-bold md:text-lg hover:bg-red-300"
              >
                Create A New Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
