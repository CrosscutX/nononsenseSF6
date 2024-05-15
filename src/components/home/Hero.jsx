import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <h1>
        <span className="white">A Simplified Approach to Learning</span> Street
        Fighter
      </h1>
      <Link to="/lessons" className="link-button">
        Start here
      </Link>
    </div>
  );
}
