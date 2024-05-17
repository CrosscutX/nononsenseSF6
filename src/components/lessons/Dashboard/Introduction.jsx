import React from "react";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="lesson-container">
        <h3>Introduction</h3>
        <Link to="/lessons/howthisworks">How This Works</Link>
        <Link to="/lessons/aboutme">About Me</Link>
        <Link to="/lessons/mindset">Mindset</Link>
        <Link to="/lessons/characterselection">Character Selection</Link>
      </div>
    </div>
  );
}
