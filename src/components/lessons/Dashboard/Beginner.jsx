import React from "react";
import { Link } from "react-router-dom";
export default function Beginner() {
  return (
    <div className="beginner">
      <div className="lesson-container">
        <div className="beginner-title-container">
          <h3 className="beginner-title">Beginner</h3>
          <p className="beginner-text">
            (Start here if you haven't hit master yet)
          </p>
        </div>
        <Link to="/lessons/beginnerneutral">Beginner Neutral</Link>
      </div>
    </div>
  );
}
