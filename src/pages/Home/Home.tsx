import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate("/form");
  };

  return (
    <main>
      <h1>Welcome</h1>
      <button onClick={handleFormClick}>FORM</button>
    </main>
  );
};
