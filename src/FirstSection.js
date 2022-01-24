import React from "react";
import Intro from "./images/illustration-intro.svg";

const FirstSection = () => {
  return (
    <section className="w-full mt-10 flex lg:flex-row-reverse sm:flex-col">
      <article className="lg:w-1/2 sm:w-full">
        <img src={Intro} alt="" />
      </article>
      <article className="lg:w-1/2 sm:text-center sm:w-full flex flex-col lg:items-start lg:text-left justify-center">
        <h1 className="lg:text-5xl sm:text-4xl my-5 text-DarkBlue font-bold sm:px-5 lg:px-20">
          Bring everyone together to build better products.
        </h1>
        <p className="text-md my-5 text-DarkGrayishBlue sm:px-5 lg:px-20">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button
          className={
            "px-5 py-3 rounded-full bg-BrightRed text-VaryLightGray hover:bg-opacity-50 duration-300 shadow-xl mx-20 my-5"
          }
        >
          Get Started
        </button>
      </article>
    </section>
  );
};

export default FirstSection;
