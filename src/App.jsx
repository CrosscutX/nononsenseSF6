import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Lessons from "./components/lessons/Lessons";
import HowThisWorks from "./components/lessons/Introduction/HowThisWorks";
import Mindset from "./components/lessons/Introduction/Mindset";
import CharacterSelection from "./components/lessons/Introduction/CharacterSelection";
import Resources from "./components/resources/Resources";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import "./styles/lessons.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route
          path="/lessons/howthisworks"
          element={
            <div className="lesson-page-container how-this-works">
              <HowThisWorks />
            </div>
          }
        />
        <Route
          path="/lessons/mindset"
          element={
            <div className="lesson-page-container mindset">
              <Mindset />
            </div>
          }
        ></Route>
        <Route
          path="/lessons/characterselection"
          element={
            <div className="lesson-page-container character-selection">
              <CharacterSelection />
            </div>
          }
        ></Route>
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
