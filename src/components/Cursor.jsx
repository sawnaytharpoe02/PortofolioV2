import React, { useEffect, useRef, useContext } from "react";
import { HoverContext } from "../utils/CursorHoverProvider";
import gsap from "gsap";
import { RiEye2Line } from "react-icons/ri";

const Cursor = () => {
  const { isHovered } = useContext(HoverContext);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef();
  const size = isHovered ? 85 : 12;

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
    if (circle.current) {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    }
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

  return (
    <div
      ref={circle}
      style={{
        width: size,
        height: size,
        transition: "width 0.3s ease-out, height 0.3s ease-out",
        background: isHovered ? "white" : "#222",
      }}
      className="rounded-full fixed top-0 left-0 pointer-events-none z-20 flex items-center justify-center">
      {isHovered && (
        <span className="text-center text-black font-medium font-mango text-3xl uppercase absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <RiEye2Line className="text-4xl" />
        </span>
      )}
    </div>
  );
};

export default Cursor;
