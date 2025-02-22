import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";
import Notfound from "./pages/Notfound/Notfound"; // page 404
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "./index.css"; // styles globaux

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Header />
      <AnimatedRoutes />
      <Footer />
      </>
  );
}

export default App;
