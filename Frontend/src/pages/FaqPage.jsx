import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { paymentQuestions, tourQuestions } from "../utils";
import { styles } from "../styles";

const FaqPage = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleOpenAnswer = (index) => {
    setShowAnswer(showAnswer === index ? null : index);
  };

  return (
    <div>
      <NavBar />
      <div className={`${styles.paddingX} ${styles.paddingY} `}>
        <section className="border-8">
          <h2 className="text-3xl font-semibold mb-4 text-center  ">Payment</h2>
          <div className="flex flex-col items-center space-y-8">
            {paymentQuestions.map((el, index) => (
              <div key={index} className="border-2  w-full ">
                <button
                  className="flex justify-between w-full cursor:pointer font-bold text-[23px] "
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
                <div className="text-[18px]">
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
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-4 mt-4 text-center ">
            Tour
          </h2>
          <div className="flex flex-col items-center space-y-8">
            {tourQuestions.map((el) => (
              <div
                key={el.question}
                className="border-2 w-5/6 rounded-3xl py-[15px] p-8"
              >
                <button
                  className="flex justify-between w-full cursor:pointer font-bold text-[23px]"
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
                <div className="text-[18px]">
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
