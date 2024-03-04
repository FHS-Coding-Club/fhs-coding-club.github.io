import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function postToGoogle(formData) {
    console.log(formData)
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfAjbKeAjjlNA4Mm2mKYeBYmo4hi3uqjgTMHsMaSY3s5nAtpQ/formResponse", {
      //add your google form generated numbers below which are also the 'names' of your inputs
      mode: 'no-cors',     
      data: formData,
      method: "POST",
      success: function (d) {
        console.log(d)
      },
      error: function (x, y, z) {
        console.log(x)
      }
    });
    return false;
  }
    
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.8 },
    },
  };
  return (
    <div className="xl:mt-12 flex justify-center items-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex-[0.75] bg-[#121211] p-8 rounded-2xl mx-auto text-center"
        style={{ maxWidth: "1000px", padding: "4rem 2rem", minHeight: "500px" }}
      >
        <h3 className={`${styles.sectionHeadText} mb-4`}>Interested?</h3>
        <p className={styles.sectionSubText}>Fill Out This Form</p>

        <div className="mt-[6rem] ml-[5rem]">
          <form onSubmit={handleSubmit(postToGoogle)}>
            <div className="form-control">
              <label>First Name</label>
              <input type="text" name="entry.539811825" {...register("entry.539811825", {required: true})} />
            </div>
            <div className="form-control">
              <label>Last Name</label>
              <input name="entry.1906472314" {...register("entry.1906472314", {required: true})} />
            </div>
            <div className="form-control">
              <label>What project are you interested in working on?</label>
              <input name="entry.1684295415" {...register("entry.1684295415", {required: true})} />
            </div>
            <div className="form-control">
              <label>Email Address</label>
              <input name="emailAddress" {...register("emailAddress", {required: true})} />
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
