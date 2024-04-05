import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Signup = () => {
  const inputClasses = classNames(
    "outline-none py-1 px-4 w-[30vw] text-lg rounded-lg shadow-lg shadow-indigo-600 "
  );
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
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
      alert("created");
      navigate("/");
    } else {
      alert("Not Created");
    }
  };

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  return (
    <div className="flex flex-col gap-4 justify-center  items-center w-screen h-screen bg-gradient-to-r from-emerald-500 from-10% via-indigo-500  via-30% to-sky-500 to-90%">
      <h1 className="text-xl font-extrabold text-amber-200 shadow-md shadow-black px-6 py-2 rounded-xl">
        Welcome To Our Fo0Reso Order Website Please Provide The Details
      </h1>
      <div className="py-10 px-6 border border-indigo-700 rounded-lg shadow-lg shadow-black">
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
                type="text"
                name="password"
                value={formData.password}
                onChange={onInputChange}
                placeholder="Enter Password"
                className={inputClasses}
              />
            </div>
            <div>
              <input
                type="text"
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
    </div>
  );
};

export default Signup;
