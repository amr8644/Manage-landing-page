import React, { useState } from "react";
import Desk from "./images/bg-simplify-section-desktop.svg";
import Mobile from "./images/bg-simplify-section-mobile.svg";
import Data from "./Data";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, id, comment, image } = Data[index];

  const checkNumber = (num) => {
    if (num < 0) {
      return Data.length - 1;
    }
    if (num > Data.length - 1) {
      return 0;
    }

    return num;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section className="w-full mt-10 flex flex-col items-center justify-center">
      <h2 className="lg:text-4xl sm:text-3xl my-10 text-DarkBlue font-bold  py-10">
        What they've said
      </h2>
      <article className="relative w-full flex flex-col items-center justify-center mt-5 ">
        <div
          key={id}
          className="lg:w-[500px] sm:w-11/12 md:w-9/12 h-[320px] flex items-center justify-center flex-col bg-VaryLightGray"
        >
          <img
            src={image}
            alt="#"
            className="my-3 absolute md:-top-20 sm:-top-28"
          />
          <h3 className="my-3 lg:text-lg text-DarkBlue font-bold sm:px-5 lg:px-20 ">
            {name}
          </h3>
          <p className="text-md my-5 text-DarkGrayishBlue sm:px-10 lg:px-20 text-center">
            {comment}
          </p>
        </div>
      </article>
      <div className="my-10 flex ">
        <button
          onClick={prevPerson}
          className="bg-BrightRed text-VaryLightGray px-5 mx-2 flex items-center justify-center flex-row rounded-full  hover:text-BrightRed hover:bg-VaryLightGray duration-500"
        >
          <ion-icon name="chevron-back-outline" size="large"></ion-icon>
        </button>
        <button
          onClick={nextPerson}
          className="bg-BrightRed text-VaryLightGray px-5 mx-2 flex items-center justify-center rounded-full hover:text-BrightRed hover:bg-VaryLightGray duration-500"
        >
          <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </button>
      </div>
      <button
        className={
          "px-5 py-3 rounded-full bg-BrightRed text-VaryLightGray hover:bg-opacity-50 duration-300 shadow-xl mx-20 my-5"
        }
      >
        Get Started
      </button>
    </section>
  );
};

export const LastSection = () => {
  return (
    <section className="relative w-full mt-10 flex flex-col items-center justify-center bg-BrightRed py-20">
      <img src={Desk} alt="#" className="absolute lg:flex sm:hidden" />
      <img src={Mobile} alt="#" className="absolute lg:hidden sm:flex left-0" />
      <h2 className="text-4xl my-5 text-VaryLightGray font-bold sm:px-5 lg:px-20 sm:text-center">
        Simplify how your team works today.
      </h2>
      <button
        className={
          "px-5 py-3 rounded-full bg-VaryLightGray text-BrightRed hover:bg-opacity-50 duration-300 shadow-xl mx-20 my-5"
        }
      >
        Get Started
      </button>
    </section>
  );
};

export default Testimonial;
