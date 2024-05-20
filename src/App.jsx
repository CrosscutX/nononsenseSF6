import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Lessons from "./components/lessons/Dashboard/Lessons";
import LessonsLayout from "./components/lessons/LessonsLayout";
import HowThisWorks from "./components/lessons/Introduction/HowThisWorks";
import AboutMe from "./components/lessons/Introduction/AboutMe";
import Mindset from "./components/lessons/Introduction/Mindset";
import CharacterSelection from "./components/lessons/Introduction/CharacterSelection";
import Execution from "./components/lessons/Introduction/Execution";
import Hardware from "./components/lessons/Introduction/Hardware";
import BeginnerNeutral from "./components/lessons/Beginner/BeginnerNeutral";
import BeginnerDefense from "./components/lessons/Beginner/BeginnerDefense";
import BeginnerPoking from "./components/lessons/Beginner/BeginnerPoking";
import BeginnerPressure from "./components/lessons/Beginner/BeginnerPressure";
import BeginnerCombos from "./components/lessons/Beginner/BeginnerCombos";
import Resources from "./components/resources/Resources";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/style.css";
import "./styles/lessons.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Header />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/lessons" element={<LessonsLayout />}>
            <Route index element={<Lessons />} />
            <Route path="howthisworks" element={<HowThisWorks />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="mindset" element={<Mindset />} />
            <Route path="characterselection" element={<CharacterSelection />} />
            <Route path="execution" element={<Execution />} />
            <Route path="hardware" element={<Hardware />} />
            <Route path="beginnerneutral" element={<BeginnerNeutral />} />
            <Route path="beginnerdefense" element={<BeginnerDefense />} />
            <Route path="beginnerpoking" element={<BeginnerPoking />} />
            <Route path="beginnerpressure" element={<BeginnerPressure />} />
            <Route path="beginnercombos" element={<BeginnerCombos />} />
          </Route>
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
