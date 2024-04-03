import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Signup = () => {
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
    <div className="w-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center h-screen gap-2"
      >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={onInputChange}
            placeholder="Enter Password"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={onInputChange}
            placeholder="Enter Your Address"
          />
        </div>
        <div className="flex gap-4">
          <button type="submit">Submit</button>
          <Link to="/login">i'm Already a User</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
