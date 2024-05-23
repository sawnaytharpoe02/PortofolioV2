import React, { useRef, useEffect } from "react";
import { loaderData } from "../utils/constant";
import styles from "./SplashScreen.module.css";
import gsap from "gsap";

const SplashScreen = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  const introAnimation = (wordGroupsRef) => {
    const tl = gsap.timeline();
    tl.to(wordGroupsRef.current, {
      yPercent: -80,
      duration: 5,
      ease: "power3.inOut",
    });

    return tl;
  };

  const collapseWords = (wordGroupsRef) => {
    const tl = gsap.timeline();
    tl.to(wordGroupsRef.current, {
      "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      duration: 3,
      ease: "expo.inOut",
    });

    return tl;
  };

  const progressAnimation = (progressNumberRef) => {
    const tl = gsap.timeline();

    tl.to(
      progressNumberRef.current,
      {
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
      .to(
        progressNumberRef.current,
        {
          textContent: "100%",
          duration: 5,
          roundProps: "textContent",
        },
        "<"
      )
      .to(progressNumberRef.current, {
        autoAlpha: 0,
      });

    return tl;
  };

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
  }, [timeline]);

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <span className={styles.loader__progressNumber} ref={progressNumberRef}>
          0%
        </span>
      </div>
      <div className={styles.loader} ref={loaderRef}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div ref={wordGroupsRef}>
            {loaderData.map((el, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {el}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
