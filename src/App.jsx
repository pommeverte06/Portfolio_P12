import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projets from "./pages/Projets/Projets";
import Skills from "./pages/Skills/Skills";
import Notfound from "./pages/Notfound/Notfound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageTransition from "./components/PageTransition";

import "./App.css";
import "./index.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    // GSAP pour un scroll fluide
    gsap.to("html", {
      overflowY: "scroll",
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <Header />

      <div className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PageTransition>
                  <Projets />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/skills"
              element={
                <PageTransition>
                  <Skills />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <Notfound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

    </>
  );
}

export default App;
