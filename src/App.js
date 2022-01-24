import React, { useState } from "react";
import logo from "./images/logo.svg";
import Desktop from "./images/bg-tablet-pattern.svg";
import Menu from "./images/icon-hamburger.svg";
import ShowNav from "./ShowNav";
import Close from "./images/icon-close.svg";
import FirstSection from "./FirstSection.js";
import SecondSection from "./SecondSection.js";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
    </>
  );
}

const Header = () => {
  const [showList, setShowList] = useState(false);
  console.log(showList);
  return (
    <header
      className={
        "relative w-full p-5 h-[120px] flex items-center justify-between"
      }
    >
      <img src={logo} alt="#" />
      <nav className={`w-3/4 lg:flex sm:hidden items-center justify-between`}>
        <ul className={"w-3/4 flex items-center"}>
          <li
            className={"mx-8 cursor-pointer text-VeryDarkBlue hover:opacity-50"}
          >
            Pricng
          </li>
          <li
            className={"mx-8 cursor-pointer text-VeryDarkBlue hover:opacity-50"}
          >
            Product
          </li>
          <li
            className={"mx-8 cursor-pointer text-VeryDarkBlue hover:opacity-50"}
          >
            About Us
          </li>
          <li
            className={"mx-8 cursor-pointer text-VeryDarkBlue hover:opacity-50"}
          >
            Careers
          </li>
          <li
            className={"mx-8 cursor-pointer text-VeryDarkBlue hover:opacity-50"}
          >
            Community
          </li>
        </ul>
        <button
          className={
            "mx-8 px-8 py-3 rounded-full bg-BrightRed text-VaryLightGray hover:bg-opacity-50 duration-300 shadow-xl"
          }
        >
          Get Started
        </button>
      </nav>
      <img src={Desktop} alt="#" className={"absolute -z-10 right-0"} />
      <button
        className={"sm:flex lg:hidden"}
        onClick={() => setShowList(!showList)}
      >
        <img src={showList ? `${Close} ` : `${Menu}`} alt="" />
      </button>
      {showList && <ShowNav showList={showList} />}
    </header>
  );
};

export default App;
