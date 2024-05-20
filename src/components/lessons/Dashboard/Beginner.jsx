import React from "react";
import { Link } from "react-router-dom";
export default function Beginner() {
  return (
    <div className="beginner">
      <p className="description-text">
        (Start here if you haven't hit master yet)
      </p>
      <div className="lesson-container">
        <div className="beginner-title-container">
          <h3 className="beginner-title">Beginner</h3>
        </div>
        <Link to="/lessons/beginnerneutral">Neutral</Link>
      </div>
    </div>
  );
}
