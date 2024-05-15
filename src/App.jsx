import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Lessons from "./components/lessons/Lessons";
import Resources from "./components/Resources";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
