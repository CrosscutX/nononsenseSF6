import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <h1>
        A Simplified Approach to Learning{" "}
        <span className="red">Street Fighter</span>
      </h1>
      <Link to="/lessons" className="link-button">
        Start here
      </Link>
    </div>
  );
}
