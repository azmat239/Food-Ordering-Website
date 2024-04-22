import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Signup = () => {
  const inputClasses = classNames(
    "outline-none py-1 px-4 md:w-[30vw] text-lg rounded-lg shadow-lg shadow-indigo-600 "
  );
  const [width, setWidth] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        password: formData.password,
        email: formData.email,
        location: formData.location,
      }),
    });
    console.log(formData);
    const json = await response.json();
    if (json.success) {
      navigate("/login");
    } else if (!json.success) {
      alert("Please Provide The Valid Details");
    }
    if (json.Exists) {
      alert("User Already Exist please Login");
      navigate("/login");
    }
  };
  const widthSet = () => {
    setWidth(96);
  };
  useEffect(() => {
    widthSet();
  }, [width]);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-4 justify-center  items-center w-screen h-screen bg-signup  bg-cover bg-no-repeat">
      <div className="flex">
        <div className="transition-all ease-in delay-1000 py-10 px-6 rounded-l-lg shadow-lg shadow-black bg-emerald-200">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center font-bold text-xl text-red-700">
              Create Your Account
            </h1>
            <p className="text-center text-md text-white mb-4">
              Enter Your Details
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  placeholder="Enter Your Name"
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
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  placeholder="Enter Your Email"
                  className={inputClasses}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={onInputChange}
                  placeholder="Enter Your Address"
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <button
                type="submit"
                className="px-2 py-1 bg-green-500 text-md rounded-md font-bold text-lg hover:bg-green-300"
              >
                Submit
              </button>
              <Link
                to="/login"
                className="px-4 py-2 bg-red-500 text-md rounded-md font-bold text-lg hover:bg-red-300"
              >
                i'm Already a User
              </Link>
            </div>
          </form>
        </div>
        <div
          className={`${
            width === 0 ? "" : "px-4 py-2"
          } hidden md:flex flex-col items-center h-96 rounded-r-xl bg-emerald-500 transition-all ease-in delay-1000 w-${width} overflow-hidden my-4 pt-10`}
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
          <div className="flex flex-col text-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
