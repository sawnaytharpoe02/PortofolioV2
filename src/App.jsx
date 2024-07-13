import React, { useLayoutEffect, useEffect, useState } from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./section/hero";
import AboutMe from "./section/aboutme";
import MyExpertise from "./section/expertise";
import Project from "./section/project";
import Contact from "./section/contact";
import FeatureProjects from "./section/feature_projects";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/footer";
import Cursor from "./components/Cursor";
import { CursorHoverProvider } from "./utils/CursorHoverProvider.jsx";
import gsap from "gsap";
import "./App.css";

function App() {
  const [splashscreenFinished, setSplashscreenFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setSplashscreenFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 375);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CursorHoverProvider>
      <div className="font-dmsan">
        {splashscreenFinished ? (
          <main className="w-full mx-auto overflow-x-hidden antialiased">
            <Navbar />
            <Hero />
            <AboutMe />
            <MyExpertise />
            <FeatureProjects />
            <Project />
            <Contact />
            <Footer />
          </main>
        ) : (
          <SplashScreen timeline={timeline} />
        )}

        {isMobile && <Cursor />}
      </div>
    </CursorHoverProvider>
  );
}

export default App;
