import React from "react";

const myVariant = {
  inputBox: "flex flex-col",
  fullWidthInputBox: "flex flex-col col-span-2",
  inputStyle: "border-b outline-none focus:outline-none mt-2 text-neutral-600 bg-transparent",
};

const Contact = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex items-end space-x-20 mb-24">
        <h3 className="text-6xl">Say hello .</h3>
        <p className="uppercase text-sm text-neutral-400">
          feel free to drop me an email anytime.
          <br />I'd love to hear from you.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className={myVariant.inputBox}>
          <label htmlFor="fullName">Full Name</label>
          <input className={myVariant.inputStyle} id="fullName" type="text" />
        </div>
        <div className={myVariant.inputBox}>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            className={myVariant.inputStyle}
            id="emailAddress"
            type="text"
          />
        </div>
        <div className={myVariant.fullWidthInputBox}>
          <label htmlFor="subject">Message Subject</label>
          <input
            className={`${myVariant.inputStyle} col-span-2`}
            id="subject"
            type="text"
          />
        </div>
        <div className={myVariant.fullWidthInputBox}>
          <label htmlFor="message">Message</label>
          <textarea className={myVariant.inputStyle} id="message" type="text" />
        </div>
      </div>
      <button className="px-10 py-1.5 bg-black text-white rounded-full mt-12 uppercase">Send</button>
    </div>
  );
};

export default Contact;
