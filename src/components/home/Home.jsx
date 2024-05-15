import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
export default function Home() {
  return (
    <main className="home">
      <h1>
        A Simplified Approach to Learning{" "}
        <span className="red">Street Fighter</span>
      </h1>
      <Link to="/lessons" className="link-button">
        Start here
      </Link>
    </main>
  );
}
