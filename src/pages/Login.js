import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: "saasduka",
        email: "sasuk239@gmail.com",
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
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Login;
