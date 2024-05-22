import React, { useContext, useEffect } from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./section/hero";
import AboutMe from "./section/aboutme";
import MyExpertise from "./section/expertise";
import Project from "./section/project";
import Contact from "./section/contact";
import FeatureProjects from "./section/feature_projects";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { CursorHoverProvider, HoverContext } from "./utils/CursorHoverProvider";
import "./App.css";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <CursorHoverProvider>
      <React.Fragment>
        <main className="w-full mx-auto font-dmsan">
          <Navbar />
          <Hero />
          <AboutMe />
          <MyExpertise />
          <FeatureProjects />
          <Project />
          <Contact />
          <Footer />
        </main>
        <Cursor />
      </React.Fragment>
    </CursorHoverProvider>
  );
}

export default App;
