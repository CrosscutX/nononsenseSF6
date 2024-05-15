import React from "react";
import "../../styles/home.css";
import Intro from "./Intro";
import Hero from "./Hero";
import What from "./What";
import Author from "./Author";
export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Intro />
      <What />
      <Author />
    </main>
  );
}
