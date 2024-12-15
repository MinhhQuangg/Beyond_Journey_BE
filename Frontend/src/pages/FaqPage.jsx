import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import {
  paymentQuestions,
  preparationQuestions,
  tourQuestions,
} from "../utils";
import { styles } from "../styles";
import { blackBackground } from "../assets";

const FaqPage = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleOpenAnswer = (index) => {
    setShowAnswer(showAnswer === index ? null : index);
  };

  return (
    <div className="bg-[#f5f5f2]">
      <NavBar />
      {/* picture after nav */}
      <div>
        <div
          className="bg-cover bg-center relative w-full"
          style={{
            backgroundImage: `url(${blackBackground})`,
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
        >
          <div className="flex justify-center items-center flex-col h-full">
            <span
              className={`font-sans text-[42px] font-bold  text-white tracking-wide`}
            >
              FAQs
            </span>
            <span className="font-sans text-[23px] text-white tracking-wide">
              We are happy to answer your questions
            </span>
          </div>
        </div>
      </div>
      {/* outline */}
      <div
        className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center`}
      >
        <section className="outline-1 bg-[#fff] w-[75%] items-center mb-[20px]">
          <h2 className="text-[28px] border-b-2 font-extrabold py-[25px] text-center  ">
            Payment
          </h2>
          <div className="flex flex-col items-center ">
            {paymentQuestions.map((el, index) => (
              <div
                key={index}
                className=" w-full px-[80px] py-[15px] border-b-2"
              >
                <button
                  className="flex justify-between h-full w-full cursor:pointer font-semibold text-[18px] py-[25px] divide-y-2 "
                  onClick={() => handleOpenAnswer(index)}
                >
                  {el.question}
                  <div>
                    {showAnswer === index ? (
                      <span className="text-primary_4">-</span>
                    ) : (
                      <span className="text-primary_4">+</span>
                    )}
                  </div>
                </button>
                <div className="text-[17px]">
                  {showAnswer === index ? (
                    <div className="py-[15px]">{el.answer}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-2 bg-[#fff] w-[75%] items-center mt-[20px]">
          <h2 className="text-[28px] border-b-2 font-extrabold py-[25px] text-center ">
            Tours and Services
          </h2>
          <div className="flex flex-col items-center">
            {tourQuestions.map((el) => (
              <div
                key={el.question}
                className=" w-full px-[80px] py-[15px] border-b-2"
              >
                <button
                  className="flex justify-between h-full w-full cursor:pointer font-semibold text-[18px] py-[25px] divide-y-2"
                  onClick={() => handleOpenAnswer(el.question)}
                >
                  {el.question}
                  <div>
                    {showAnswer === el.question ? (
                      <span className="text-primary_4">-</span>
                    ) : (
                      <span className="text-primary_4">+</span>
                    )}
                  </div>
                </button>
                <div className="text-[17px]">
                  {showAnswer === el.question ? (
                    <div className="py-[15px]">{el.answer}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*  */}
        <section className="border-2 bg-[#fff] w-[75%] items-center mt-[20px]">
          <h2 className="text-[28px] border-b-2 font-extrabold py-[25px] text-center ">
            Preparations
          </h2>
          <div className="flex flex-col items-center">
            {preparationQuestions.map((el) => (
              <div
                key={el.question}
                className=" w-full px-[80px] py-[15px] border-b-2"
              >
                <button
                  className="flex justify-between h-full w-full cursor:pointer font-semibold text-[18px] py-[25px] divide-y-2"
                  onClick={() => handleOpenAnswer(el.question)}
                >
                  {el.question}
                  <div>
                    {showAnswer === el.question ? (
                      <span className="text-primary_4">-</span>
                    ) : (
                      <span className="text-primary_4">+</span>
                    )}
                  </div>
                </button>
                <div className="text-[17px]">
                  {showAnswer === el.question ? (
                    <div className="py-[15px]">{el.answer}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;
