import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { paymentQuestions, tourQuestions } from "../utils";

const FaqPage = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleOpenAnswer = (index) => {
    setShowAnswer(showAnswer === index ? null : index);
  };

  return (
    <div>
      <NavBar />
      <section className="">
        <h2 className="text-3xl font-semibold mb-4 text-center ">Payment</h2>
        {paymentQuestions.map((el, index) => (
          <div key={index} className="border-2 py-[15px]">
            <button
              className="flex justify-between w-full cursor:pointer font-bold text-[23px] "
              onClick={() => handleOpenAnswer(index)}
            >
              {el.question}
              <div>
                {showAnswer === index ? <span>-</span> : <span>+</span>}
              </div>
            </button>
            <div className="text-[18px]">
              {showAnswer === index ? (
                <div className="py-[15px]">{el.answer}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </section>
      <section className="">
        <h2 className="text-3xl font-semibold mb-4 text-center ">Tour</h2>
        {tourQuestions.map((el) => (
          <div key={el.question} className="border-2 py-[15px]">
            <button
              className="flex justify-between w-full cursor:pointer font-bold text-[23px]"
              onClick={() => handleOpenAnswer(el.question)}
            >
              {el.question}
              <div>
                {showAnswer === el.question ? <span>-</span> : <span>+</span>}
              </div>
            </button>
            <div className="text-[18px]">
              {showAnswer === el.question ? (
                <div className="py-[15px]">{el.answer}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default FaqPage;
