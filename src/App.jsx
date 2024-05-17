import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Lessons from "./components/lessons/Dashboard/Lessons";
import LessonsLayout from "./components/lessons/LessonsLayout";
import HowThisWorks from "./components/lessons/Introduction/HowThisWorks";
import AboutMe from "./components/lessons/Introduction/AboutMe";
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
        <Route path="/lessons" element={<LessonsLayout />}>
          <Route index element={<Lessons />} />
          <Route path="howthisworks" element={<HowThisWorks />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="mindset" element={<Mindset />} />
          <Route path="characterselection" element={<CharacterSelection />} />
        </Route>
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
