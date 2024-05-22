import React, { useEffect, useRef } from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./section/hero";
import AboutMe from "./section/aboutme";
import MyExpertise from "./section/expertise";
import Project from "./section/project";
import Contact from "./section/contact";
import FeatureProjects from "./section/feature_projects";
import Footer from "./components/Footer";
import gsap from "gsap";
import "./App.css";

function App() {
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef();

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const delayedMouse = useRef({ x: 0, y: 0 });

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
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
      <div
        ref={circle}
        className="bg-cursor h-[18px] w-[18px] rounded-full fixed top-0 left-0 pointer-events-none"></div>
    </React.Fragment>
  );
}

export default App;
