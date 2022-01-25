import React, { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import Facebook from "./images/icon-facebook.svg";
import Instagram from "./images/icon-instagram.svg";
import Twitter from "./images/icon-twitter.svg";
import Youtube from "./images/icon-youtube.svg";
import Pinterest from "./images/icon-pinterest.svg";

const Footer = () => {
  return (
    <section className="bg-VeryDarkBlue w-full flex lg:flex-row sm:flex-col-reverse py-20">
      <article className="lg:w-2/6 sm:w-full  flex items-center justify-around flex-col sm:my-5">
        <img src={logo} alt="" className=" sm:mt-10" />
        <div className="w-full flex items-center justify-evenly sm:mt-10">
          <img src={Facebook} alt="" className="cursor-pointer" />
          <img src={Twitter} alt="" className="cursor-pointer" />
          <img src={Instagram} alt="" className="cursor-pointer" />
          <img src={Youtube} alt="" className="cursor-pointer" />
          <img src={Pinterest} alt="" className="cursor-pointer" />
        </div>
      </article>

      <article className="lg:w-2/6 sm:w-full flex items-center text-VaryLightGray sm:mt-10">
        <ul className="w-1/2 flex flex-col items-center">
          <li className="cursor-pointer hover:text-BrightRed my-2">Home</li>
          <li className="cursor-pointer hover:text-BrightRed my-2">Pricing </li>
          <li className="cursor-pointer hover:text-BrightRed my-2">Products</li>
          <li className="cursor-pointer hover:text-BrightRed my-2">About Us</li>
        </ul>
        <ul className="w-1/2 flex flex-col items-center">
          <li className="cursor-pointer hover:text-BrightRed my-2">Careers</li>
          <li className="cursor-pointer hover:text-BrightRed my-2">
            Community
          </li>
          <li className="cursor-pointer hover:text-BrightRed my-2">
            Privacy Policy
          </li>
        </ul>
      </article>

      <article className="lg:w-2/6 sm:w-full flex items-center justify-center sm:mb-10">
        <form className="w-full h-full flex items-center justify-center">
          <input
            type="email"
            name="email"
            placeholder="Updates in your inbox..."
            className="focus:ring-2 focus:ring-BrightRed outline-none py-2 px-4 rounded-full text-sm"
          />
          <button
            type="submit"
            className={
              "px-3 py-1 rounded-full bg-BrightRed text-VaryLightGray hover:bg-opacity-50 duration-300 shadow-xl mx-2"
            }
          >
            Go
          </button>
        </form>
      </article>
    </section>
  );
};

export default Footer;
