import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const el = aboutSectionRef.current;

    const changeBodyStyle = (bgColor, color) => {
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = color;
      document.body.style.transition = "all 0.8s";
    };

    const trigger = {
      trigger: el,
      start: "10% center",
      end: "80% center",
      scrub: true,
      onEnter: () => changeBodyStyle("#222", "#fff"),
      onLeave: () => changeBodyStyle("initial", "#222"),
      onEnterBack: () => changeBodyStyle("#222", "#fff"),
      onLeaveBack: () => changeBodyStyle("initial", "#222"),
    };

    ScrollTrigger.create(trigger);
  }, []);

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="max-w-screen-2xl mx-auto pt-8 lg:py-24">
      <div className="space-y-10 lg:space-y-20 pl-4 lg:px-20 text-lg lg:text-5xl tracking-wider leading-relaxed lg:leading-relaxed lg:tracking-wide">
        <p>
          Hey there! I'm Saw Nay Thar Poe, originally from Myanmar, While my
          academic journey started with geography, the captivating world of web
          technology grabbed my attention. Now, I'm diving headfirst into this
          dynamic field, fueled by a passion for crafting user-friendly web
          applications.
        </p>
        <p>
          I started playing around with a task management system and restaurant
          ordering system. Seeing how technology can make things easier for
          people really interested me. Now, my goal is to simplify people's
          daily lives with user-friendly web apps crafted with my passion and
          expertise.
        </p>
        <p>
          Away from the keyboard, you'll find me enjoying historical dramas,
          tasty snacks, and a good game.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
