import React from "react";
import Introduction from "./Introduction";
import Beginner from "./Beginner";
import Intermediate from "./Intermediate";
import Advanced from "./Advanced";

export default function Lessons() {
  return (
    <div className="lessons">
      <h1>Lessons</h1>
      <div className="lessons-content">
        <Introduction />
        <Beginner />
        <Intermediate />
        <Advanced />
      </div>
    </div>
  );
}
