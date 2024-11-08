"use client";
import React, { useState } from "react";
import { questions } from "../../data/questions";
import { FaArrowLeft } from "react-icons/fa";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const generateAnalysis = (responses) => {
  const analysis = responses.map((response, index) => {
    const question = questions.find((q) => q.id === response.questionId);
    return (
      <div
        key={index}
        className="mb-4 p-4 border rounded-lg shadow-md bg-white"
      >
        <p className="text-gray-700 font-semibold">{question.text}</p>
        <p className="text-blue-700 mt-2">{response.option.text}</p>
      </div>
    );
  });
  return analysis;
};
const SelfAssessmentPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([]);
  const [history, setHistory] = useState([]);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const router = useRouter();
  const { user } = useUser();

  const handleOptionClick = (option) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, option }];
    setAnswers(newAnswers);
    setHistory([...history, currentQuestion]);

    const nextQuestion = questions.find((q) => q.id === option.next);
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowAnalysis(true);
    }
  };
  const handleBackClick = () => {
    const prevQuestion = history.pop();
    setHistory([...history]);
    setCurrentQuestion(prevQuestion);
    setAnswers(answers.slice(0, -1));
    setShowAnalysis(false);
  };

  const doneStep = () => {
    // console.log(userData)
    router.push("/self-assessment");
  };

  const handleResult = () => {
    if (!user) {
      router.push("/login?referrer=self-assessment");
    } else {
      router.push("/self-assessment/result");
    }
  };

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <div className="">
        {showAnalysis ? (
          <div className="flex flex-col">
            <div className="bg-black flex items-center justify-between w-full sm:w-[550px] md:w-[644px] lg:w-[900px] mb-2 text-gray-100 py-4 px-4 text-center  rounded-t-lg">
              <h1>Your Answers</h1>
              <div className="z-50">
                <Link href="/" className="">
                  <IoMdArrowRoundBack />
                </Link>
              </div>
            </div>
            <div className="">
              <div className=" text-sm">{generateAnalysis(answers)}</div>
            </div>
            <div className="flex justify-center items-center py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-fit text-white px-4 py-2 rounded"
                onClick={handleResult}
              >
                Get Your Result
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex mb-8">
              <Link href="/" className="flex justify-center items-center">
                <IoMdArrowRoundBack />
              </Link>
              <div className="ml-4 flex-1 w-full flex flex-col items-center justify-center">
                <h1>Select Your Concern</h1>
                <div className="w-20 h-0.5 bg-gray-500"></div>
              </div>
            </div>
            <div className="">
              {/* <div className="flex items-center mb-4 p-2">
                <Image
                  src="/images/femdoc.png"
                  alt="Avatar"
                  className="rounded-full mr-4 w-16 h-16"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="text-sm text-gray-700">Hi!</p>
                  <p className="font-bold text-gray-900">
                    I am Geet, your personal health coach.
                  </p>
                </div>
              </div> */}
              {history.length > 0 && (
                <div className="flex flex-row items-center justify-start gap-8 ">
                  <button
                    className="text-blue-700 text-sm flex items-center ml-2"
                    onClick={handleBackClick}
                  >
                    <FaArrowLeft className="mr-2" /> Back to previous question
                  </button>
                  <div className="flex  items-center justify-center">
                    {currentQuestion.number}/9
                  </div>
                </div>
              )}
              {answers.map((answer, index) => {
                const question = questions.find(
                  (q) => q.id === answer.questionId
                );
                return (
                  <div key={index} className="mb-2 p-2">
                    <p className="text-sm font-semibold">{question.text}</p>
                    <div className="flex justify-end items-center">
                      <p className="text-sm text-right my-2 py-2 border border-blue-500 rounded-lg px-2 w-fit cursor-pointer">
                        {answer.option.text}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="bg-gray-00 p-4 rounded shadow-sm">
                <p className="text-sm font-semibold">{currentQuestion.text}</p>
                <div className="mt-4 space-y-2 md:space-y-4">
                  {currentQuestion.id === 1 ? (
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      {currentQuestion.options.map((option) => (
                        <div
                          key={option.id}
                          className="w-full h-40 md:w-60 md:h-72 bg-gray-100 p-2 rounded flex justify-center items-center hover:scale-110 transition-all cursor-pointer"
                        >
                          <button
                            className=""
                            onClick={() => handleOptionClick(option)}
                          >
                            {option.text}
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {currentQuestion.options.map((option) => (
                        <div
                          key={option.id}
                          className="w-full p-2 border-2 rounded-md hover:bg-gray-200"
                        >
                          <button onClick={() => handleOptionClick(option)}>
                            {option.text}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      className="w-full flex flex-col text-left p-2 border rounded-md hover:bg-gray-200"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.text}
                    </button>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelfAssessmentPage;
