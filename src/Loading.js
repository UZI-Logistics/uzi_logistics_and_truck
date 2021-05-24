import React from "react";
import Spinner from "../src/images/wait.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={Spinner} loading="lazy" alt="logo" />
      <h3 style={{ color: "green" }}>Your Go-to Logisitics Platform...</h3>
    </div>
  );
};

export default Loading;
