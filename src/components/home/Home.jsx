import React from "react";

import "../../styles/home.css";
import Intro from "./Intro";
import Hero from "./Hero";
export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Intro />
    </main>
  );
}
