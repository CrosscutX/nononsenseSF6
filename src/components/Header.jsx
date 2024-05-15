import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="header-left">
          <Link to="/">
            <span className="no">NO</span> NONSENSE
          </Link>
        </div>
        <div className="header-right">
          <Link to="/lessons">Lessons</Link>
          <Link to="/resources">Resources</Link>
        </div>
      </nav>
    </header>
  );
}
