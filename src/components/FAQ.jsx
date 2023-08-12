import React, { useState } from "react";
import Header from "./Header";
import InfoIcon from "../assets/info.svg";

function FAQ() {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  // Toggle the answer visibility
  function toggleAnswer() {
    setIsAnswerVisible((prevState) => !prevState);
  }

  return (
    <div>
      <Header />
      <div>
        <p className="text-center bg-red-400 p-4 w-[280px] m-auto mt-4 text-white">
          FAQ - Frequently Asked Questions
        </p>

        <div className="s-full rounded-lg w-[280px] m-auto mt-4">
          <div className="p-2 px-4">
            <div
              className={`question flex gap-2 border-b-2 p-2 transition duration-300 ${
                isAnswerVisible ? "mb-4" : ""
              }`}
              id="question"
              onClick={toggleAnswer}
            >
              <img className="w-6" src={InfoIcon} alt="" />
              <p>Question</p>
            </div>
            {isAnswerVisible && (
              <p
                className={`answer opacity-0 transition-opacity duration-300 ${
                  isAnswerVisible ? "opacity-100" : ""
                }`}
                id="answer"
              >
                Answer
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
