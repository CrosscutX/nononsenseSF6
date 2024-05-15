import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Lessons from "./components/lessons/Lessons";
import Resources from "./components/resources/Resources";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
