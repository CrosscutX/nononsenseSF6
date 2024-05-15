import React from "react";
import Introduction from "./Introduction/Introduction";
import Beginner from "./Beginner/Beginner";
import Intermediate from "./Intermediate/Intermediate";
import Advanced from "./Advanced/Advanced";
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
