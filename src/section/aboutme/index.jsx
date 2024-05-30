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
      document.body.style.transition = "all 0.6s";
    };

    const trigger = {
      trigger: el,
      start: "10% center",
      end: "90% center",
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
      <div className="space-y-10 lg:space-y-20 pl-4 pr-2 lg:px-20 leading-[1.75] text-pretty text-lg lg:leading-relaxed lg:text-5xl lg:tracking-wider">
        <p>
          Hey there! I'm Saw Nay Thar Poe, originally from Myanmar. While my
          academic journey began in geography, the captivating world of web
          technology soon grabbed my attention. Now, I'm diving headfirst into
          this dynamic field, fueled by a passion for crafting user-friendly web
          applications.
        </p>
        <p>
          My journey into web development started with creating a task
          management system and a restaurant ordering system. Witnessing
          firsthand how technology can simplify everyday tasks sparked my
          enthusiasm and determination. I love the challenge of turning complex
          problems into elegant, intuitive solutions that enhance people's
          lives.
        </p>
        <p>
          I have experience in building responsive, efficient, and aesthetically
          pleasing web applications using the latest technologies. My expertise
          includes React, Next.js and various other tools that help bring
          innovative ideas to life.
        </p>
        <p>
          I'm constantly learning and evolving in this ever-changing field,
          eager to embrace new challenges and opportunities. My ultimate goal is
          to continue creating impactful, user-centric web applications that
          make a difference in people's lives
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
