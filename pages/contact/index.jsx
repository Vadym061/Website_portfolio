import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_du2kbjq",
      "template_vnyiciw",
      form.current,
      "wo_2vPvutTSapfivD"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact" className=" pt-20 bg-primary/30 relative h-full">
      <div className="flex flex-col w-full max-w-[700px] mx-auto">
      <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-3"
          >
            Lets <span className="text-turquoise">connect.</span>
      </motion.h2>

        <motion.form
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full z-10"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex gap-1">
          <input type="text" name="subject" placeholder="Subject" className="input" required />
          <input className="input"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          </div>
          <input className="input" type="text" name="email" placeholder="Your Email" required />
          <textarea className="textarea"
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
            Send{" "} 
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
