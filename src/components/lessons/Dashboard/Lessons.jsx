import React from "react";
import Introduction from "./Introduction";
import Beginner from "./Beginner";
import Intermediate from "./Intermediate";
import Advanced from "./Advanced";

export default function Lessons() {
  return (
    <div className="lessons">
      <h2>Lessons</h2>
      <div className="lessons-content">
        <Introduction />
        <Beginner />
        <Intermediate />
        <Advanced />
      </div>
    </div>
  );
}
