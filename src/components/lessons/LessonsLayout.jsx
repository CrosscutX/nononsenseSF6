import React from "react";
import { Outlet } from "react-router-dom";
export default function LessonsLayout() {
  return (
    <main className="lessons-page">
      <Outlet />
    </main>
  );
}
