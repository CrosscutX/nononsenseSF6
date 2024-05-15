import React from "react";
import Introduction from "./Introduction";
import Beginner from "./Beginner";
import Intermediate from "./Intermediate";
import Advanced from "./Advanced";
import "../../styles/lessons.css";
export default function Lessons() {
  return (
    <main className="lessons">
      <h1>Lessons</h1>
      <div className="lessons-content">
        <Introduction />
        <Beginner />
        <Intermediate />
        <Advanced />
      </div>
    </main>
  );
}
