import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function LessonsLayout() {
  return (
    <main className="lessons-page">
      <Outlet />
      <Link className="link-button" to="/lessons">
        Back
      </Link>
    </main>
  );
}
