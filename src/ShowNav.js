import React from "react";

const ShowNav = ({ showList }) => {
  return (
    <nav
      className={`absolute top-[100px] sm:w-11/12  h-96 flex flex-col items-center justify-between z-30 shadow-2xl bg-white ease-in-out  duration-300 ${
        showList ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className={"w-full h-full flex items-center justify-evenly flex-col"}>
        <li
          className={
            "cursor-pointer text-VeryDarkBlue hover:opacity-50 font-semibold"
          }
        >
          Pricng
        </li>
        <li
          className={
            "cursor-pointer text-VeryDarkBlue hover:opacity-50 font-semibold"
          }
        >
          Product
        </li>
        <li
          className={
            "cursor-pointer text-VeryDarkBlue hover:opacity-50 font-semibold"
          }
        >
          About Us
        </li>
        <li
          className={
            " cursor-pointer text-VeryDarkBlue hover:opacity-50 font-semibold"
          }
        >
          Careers
        </li>
        <li
          className={
            " cursor-pointer text-VeryDarkBlue hover:opacity-50 font-semibold"
          }
        >
          Community
        </li>
      </ul>
    </nav>
  );
};

export default ShowNav;
