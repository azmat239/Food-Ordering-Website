import React from "react";

const Signup = () => {
  const handleClick = async () => {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Sasuke uchiha",
        password: "saasduka",
        email: "sasuk239@gmail.com",
        location: "khrew india",
      }),
    });
    const json = await response.json();
    if (json.success) {
      alert("created");
    } else {
      alert("Not Created");
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Signup;
