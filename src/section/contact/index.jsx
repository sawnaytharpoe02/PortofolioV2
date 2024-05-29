import React, { useRef, useEffect, useState } from "react";
import { Magnetic } from "../../components";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoCloseCircle } from "react-icons/io5";

const myVariant = {
  inputBox: "flex flex-col col-span-2 lg:col-span-1",
  fullWidthInputBox: "flex flex-col col-span-2",
  inputStyle:
    "border-b outline-none focus:outline-none mt-2 text-neutral-600 bg-transparent",
};

const Notification = ({ message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="fixed top-4 right-4 bg-black text-[#fff] p-4 rounded-sm shadow-md flex items-center">
    <p className="text-sm">{message}</p>
    <button onClick={onClose} className="ml-4">
      <IoCloseCircle className="text-2xl" />
    </button>
  </motion.div>
);

const Contact = () => {
  const titleRef = useRef(null);
  const controls = useAnimation();
  const isTitleInView = useInView(titleRef, { once: true });
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (isTitleInView) {
      controls.start("animate");
    }
  }, [isTitleInView, controls]);

  const parentVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const email = {
    service_id: "service_dathr3l",
    template_id: "template_klerq4j",
    public_id: "kzDrUUn7kZLkhoYya",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      to_name: emailData.subject
        ? emailData.subject
        : "Portfolio Version 2 Reviewing",
      message: emailData.message,
    };

    emailjs
      .send(
        email.service_id,
        email.template_id,
        templateParams,
        email.public_id
      )
      .then(
        () => {
          setIsSending(false);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() =>
        setEmailData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      );
  };

  return (
    <section
      id="contact"
      className="max-w-screen-lg mx-auto px-4 lg:px-0 pt-10 lg:pt-20">
      <motion.div
        ref={titleRef}
        initial="initial"
        animate={controls}
        variants={titleVariants}
        className="flex flex-col lg:flex-row lg:items-end lg:space-x-20 mb-10 lg:mb-24">
        <motion.h3 variants={titleVariants} className="text-5xl lg:text-6xl">
          Say hello .
        </motion.h3>
        <motion.p
          variants={titleVariants}
          className="uppercase text-sm text-neutral-400 mt-8 lg:mt-0">
          feel free to drop me an email anytime.
          <br />
          I'd love to hear from you.
        </motion.p>
      </motion.div>
      <motion.form
        onSubmit={handleSubmit}
        initial="initial"
        animate={controls}
        variants={parentVariants}
        className="grid grid-cols-2 gap-10">
        <motion.div variants={formVariants} className={myVariant.inputBox}>
          <label htmlFor="full_name">Full Name</label>
          <input
            id="full_name"
            className={myVariant.inputStyle}
            type="text"
            value={emailData.name}
            onChange={(e) =>
              setEmailData({ ...emailData, name: e.target.value })
            }
            required
          />
        </motion.div>

        <motion.div variants={formVariants} className={myVariant.inputBox}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            className={myVariant.inputStyle}
            type="email"
            value={emailData.email}
            onChange={(e) =>
              setEmailData({ ...emailData, email: e.target.value })
            }
            required
          />
        </motion.div>
        <motion.div
          variants={formVariants}
          className={myVariant.fullWidthInputBox}>
          <label htmlFor="subject">Message Subject (optioinal)</label>
          <input
            id="subject"
            className={`${myVariant.inputStyle} col-span-2`}
            type="text"
            value={emailData.subject}
            onChange={(e) =>
              setEmailData({ ...emailData, subject: e.target.value })
            }
          />
        </motion.div>
        <motion.div
          variants={formVariants}
          className={myVariant.fullWidthInputBox}>
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            className={myVariant.inputStyle}
            type="text"
            value={emailData.message}
            onChange={(e) =>
              setEmailData({ ...emailData, message: e.target.value })
            }
            required
          />
        </motion.div>

        <Magnetic>
          <button
            type="submit"
            disabled={isSending}
            className="px-10 py-1.5 rounded-full mt-12 w-fit flex items-center space-x-2 bg-black text-white">
            <span>{isSending ? "Sending ..." : "Send"}</span>
          </button>
        </Magnetic>
      </motion.form>

      {showNotification && (
        <Notification
          message="Got it! Your message just landed."
          onClose={() => setShowNotification(false)}
        />
      )}
    </section>
  );
};

export default Contact;
