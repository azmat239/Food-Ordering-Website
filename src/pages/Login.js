import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
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
      alert("Valid Details ");
      navigate("/");
    } else {
      alert("InValid Details");
    }
  };

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  return (
    <div className=" w-screen bg-gradient-to-r from-emerald-500 from-10% via-indigo-500  via-30% to-sky-500 to-90%">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center h-screen gap-2"
      >
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={onInputChange}
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
        <div className="flex gap-4">
          <button type="submit">Login</button>
          <Link to="/signup">Create A New Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
