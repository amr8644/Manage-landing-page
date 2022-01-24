import React from "react";

const SecondSection = () => {
  return (
    <section className="w-full mt-10 flex lg:flex-row sm:flex-col">
      <article className="lg:w-1/2 sm:text-center sm:w-full flex flex-col lg:items-start lg:text-left justify-start">
        <h2 className="lg:text-4xl sm:text-3xl my-5 text-DarkBlue font-bold sm:px-5 lg:px-20">
          What’s different <br /> about Manage?
        </h2>
        <p className="text-md my-5 text-DarkGrayishBlue sm:px-10 lg:px-20">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </p>
      </article>
      <article className="lg:w-1/2 sm:w-full flex flex-col items-end justify-end">
        <div className="lg:w-11/2 sm:full">
          <h4 className="lg:text-lg sm:text-sm my-5 text-DarkBlue font-bold sm:px-5 lg:px-20 ">
            <span className="bg-BrightRed px-4 py-2 rounded-full text-VaryLightGray font-medium lg:mr-5 sm:mr-2">
              01{" "}
            </span>
            Track company-wide progress
          </h4>
          <p className="text-md my-5 text-DarkGrayishBlue sm:px-10 lg:px-20">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="lg:w-11/2">
          <h4 className="lg:text-lg sm:text-sm my-5 text-DarkBlue font-bold sm:px-5 lg:px-20 ">
            <span className="bg-BrightRed px-4 py-2 rounded-full text-VaryLightGray font-medium lg:mr-5 sm:mr-2">
              02{" "}
            </span>
            Advanced built-in reports
          </h4>
          <p className="text-md my-5 text-DarkGrayishBlue sm:px-10 lg:px-20">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="lg:w-11/2">
          <h4 className="lg:text-lg sm:text-sm my-5 text-DarkBlue font-bold sm:px-5 lg:px-20 ">
            <span className="bg-BrightRed px-4 py-2 rounded-full text-VaryLightGray font-medium lg:mr-5 sm:mr-2">
              03{" "}
            </span>
            Everything you need in one place
          </h4>
          <p className="text-md my-5 text-DarkGrayishBlue sm:px-10 lg:px-20">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SecondSection;
