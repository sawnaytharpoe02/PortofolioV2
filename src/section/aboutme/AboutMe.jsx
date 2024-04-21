import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 border border-red-500">
      <div className="flex">
        <p className="basis-5/12 text-5xl">My Story</p>
        <div className="basis-7/12 space-y-4 px-5 text-grey">
          <p className="text-xl font-medium text-black leading-8">
            Hi, I'm Saw Nay Thar Poe, a web developer with a passion for coding!
            I love turning JavaScript into amazing websites that are easy to
            use. Originally from Myanmar, I was studying geography, but web
            technology grabbed my attention. So, I decided to switch gears and
            make this my career. Now, I'm diving headfirst into this exciting
            field!
          </p>
          <p className="text-[1.05rem] leading-7">
            I started playing around with a restaurant ordering system. Seeing
            how technology can make things easier for people really interested
            me. Now, my goal is to simplify people's daily lives with
            user-friendly web applications crafted with my passion and
            expertise. Away from the keyboard, I enjoy watching ancient series,
            eating snacks, and playing games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
