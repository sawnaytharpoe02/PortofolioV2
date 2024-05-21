import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const el = aboutSectionRef.current;

    const trigger = {
      trigger: el,
      start: "10% center",
      end: "80% center",
      scrub: true,
      markers: true,
      onEnter: () => {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        document.body.style.transition = "all 0.4s";
      },
      onLeave: () => {
        document.body.style.backgroundColor = "initial";
        document.body.style.color = "#222";
        document.body.style.transition = "all 0.4s";
      },
      onEnterBack: () => {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        document.body.style.transition = "all 0.4s";
      },
      onLeaveBack: () => {
        document.body.style.backgroundColor = "initial";
        document.body.style.color = "#222";
        document.body.style.transition = "all 0.4s";
      },
    };

    ScrollTrigger.create(trigger);
  }, []);

  return (
    <section ref={aboutSectionRef} className="max-w-screen-xl mx-auto py-24">
      <div className="space-y-20 px-20 text-5xl leading-relaxed tracking-wide">
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
