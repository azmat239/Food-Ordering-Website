import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
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

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const inputClasses = classNames(
    "outline-none py-1 px-4 w-[30vw] text-lg rounded-lg shadow-lg shadow-indigo-600 "
  );
  return (
    <div className="flex flex-col gap-4 justify-center  items-center w-screen h-screen bg-gradient-to-r from-emerald-500 from-10% via-indigo-500  via-30% to-sky-500 to-90%">
      <h1 className="text-xl font-extrabold text-amber-200 shadow-md shadow-black px-6 py-2 rounded-xl">
        Welcome To Our FooReso Order Website Please Provide The Details
      </h1>
      <div className="py-10 px-6 border border-indigo-700 rounded-lg shadow-lg shadow-black">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-xl text-red-700">LOGIN</h1>
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
              className="px-2 py-1 bg-green-500 text-md rounded-md font-bold text-lg hover:bg-green-300"
            >
              Login
            </button>
            <Link
              to="/signup"
              className="px-4 py-2 bg-red-500 text-md rounded-md font-bold text-lg hover:bg-red-300"
            >
              Create A New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
