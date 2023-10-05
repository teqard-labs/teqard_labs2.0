import React, { useRef } from "react";
import styles from "../../style";
import { socialMedia } from "../../constants";

// Import Formspree components and hooks
import { useForm } from '@formspree/react';

const Footer = () => {
  // Define refs for form fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Initialize Formspree useForm hook
  const [state, handleSubmit] = useForm("xyyqblwo");

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

  // Submit the form using Formspree
  handleSubmit(event)
    .then((response) => {
      if (response) {
        if (response.ok) {
          // Handle a successful form submission here
          // You can display a success message or reset the form, for example
          console.log("Form submitted successfully");
          event.target.reset();
        } else {
          // Handle an error in form submission here
          // You can display an error message or take appropriate action
          console.error("Error submitting form");
        }
      } else {
        // Handle a response that is undefined
        console.error("Undefined response received");
      }
    })
    .catch((error) => {
      // Handle network or other errors here
      console.error("Error:", error);
    });

  // Log a message to indicate that the API has been called
  console.log("API call initiated");
}


  return (
    <section id="footer" className={`${styles.flexCenter} py-5 flex-col`}>
      <div className="w-screen md:w-1/2 py-5">
        {/* Form with Formspree integration */}
        <form
          method="POST"
          className="form bg-white dark:bg-[#00040f] p-5 mt-5 mb-20 relative"
          onSubmit={handleFormSubmit}
        >
          <h3 className="text-4xl text-secondary dark:text-white font-semibold pb-10 font-poppins text-center">
            Explore our portfolio, get in touch, and let's bring your vision to life.
          </h3>

          <div className="flex space-x-5 mt-3">
            <input
              ref={nameRef}
              labelInput="Name"
              typeInput="text"
              idInput="name"
              placeholder="Your Name"
              className="border p-2 w-1/2 dark:bg-[#00040f] font-poppins"
            />
            <input
              ref={emailRef}
              labelInput="Email"
              typeInput="email"
              idInput="email"
              placeholder="Your Email"
              className="border p-2 w-1/2 dark:bg-[#00040f] font-poppins"
            />
          </div>
          <textarea
            ref={messageRef}
            name="message"
            id="message"
            cols="30"
            rows="3"
            placeholder="Tell us about desired property"
            className="border p-2 mt-3 w-full dark:bg-[#00040f] font-poppins"
            defaultValue={""}
          />
          <p className="font-bold text-sm mt-3 dark:text-white font-poppins">GDPR Agreement *</p>
          <div className="flex items-baseline space-x-2 mt-2">
            <input type="checkbox" name id className="inline-block" />
            <p className="text-secondary dark:text-white text-sm font-poppins">
              I consent to having this website store my submitted information so they can respond to my inquiry.
            </p>
          </div>

          <button
            type="submit"
            defaultValue="Submit"
            className="w-full mt-6 bg-secondary  hover:bg-white hover:text-[#00040f] text-white font-semibold p-3"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] dark:border-t-white">
        <p className={`font-poppins font-normal text-center text-[18px] leading-[27px] dark:text-white`}>
          Copyright Ⓒ 2022 TeqardLabs. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } filter `}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
