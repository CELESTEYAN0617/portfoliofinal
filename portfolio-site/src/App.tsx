import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlobCursor from "./components/BlobCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import OtherProjects from "./components/OtherProjects";
import Pawmeet from "./components/Pawmeet";
import Infosafe from "./components/Infosafe";
import Resume from "./components/Resume";
import ContactPage from "./components/ContactPage";
import Allprojects from "./components/Allprojects";
import Witness from "./components/Witness";
import OtherP from "./components/OtherP";

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative">
        <BlobCursor />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <OtherProjects />
              <Skills />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/projects/pawmeet" element={<Pawmeet />} />
          <Route path="/resume" element={
            <div className="min-h-screen flex flex-col">
              <Resume />
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen flex flex-col">
              <ContactPage />
              <Footer />
            </div>
          } />
          <Route path="/projects/infosafe" element={<Infosafe />} />
          <Route path="/all-projects" element={
            <div className="min-h-screen flex flex-col">
              <Allprojects />
              <Footer />
            </div>
          } />
          <Route path="/projects/witness" element={<Witness />} />
          <Route path="/otherp" element={<OtherP />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;


