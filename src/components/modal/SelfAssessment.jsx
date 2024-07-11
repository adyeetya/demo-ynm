'use client'
import React, { useState } from 'react'
import { questions } from '../../data/questions'
import { FaArrowLeft } from 'react-icons/fa'

const generateAnalysis = (responses) => {
  const analysis = responses.map((response, index) => {
    const question = questions.find((q) => q.id === response.questionId)
    return (
      <div
        key={index}
        className="mb-4 p-4 border rounded-lg shadow-md bg-white"
      >
        <p className="text-gray-700 font-semibold">{question.text}</p>
        <p className="text-blue-700 mt-2">{response.option.text}</p>
      </div>
    )
  })
  return analysis
}

const SelfAssessment = ({ closeModal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [answers, setAnswers] = useState([])
  const [history, setHistory] = useState([])
  const [showAnalysis, setShowAnalysis] = useState(false)

  const handleOptionClick = (option) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, option }]
    setAnswers(newAnswers)
    setHistory([...history, currentQuestion])

    const nextQuestion = questions.find((q) => q.id === option.next)
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowAnalysis(true)
    }
  }

  const handleBackClick = () => {
    const prevQuestion = history.pop()
    setHistory([...history])
    setCurrentQuestion(prevQuestion)
    setAnswers(answers.slice(0, -1))
    setShowAnalysis(false)
  }

  const handleJumpToQuestion = (index) => {
    const targetQuestion = questions.find(
      (q) => q.id === answers[index].questionId
    )
    setCurrentQuestion(targetQuestion)
    setAnswers(answers.slice(0, index + 1))
    setHistory(history.slice(0, index + 1))
    setShowAnalysis(false)
  }

  return (
    <div className="sm:w-[550px] md:w-[644px] lg:w-[900px] relative mx-auto p-4 h-[700px] overflow-y-auto">
      <div className="absolute top-4 right-4 p-4">
        <button
          onClick={closeModal}
          className="text-gray-200 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="bg-white rounded shadow-md">
        {showAnalysis ? (
          <>
            <h2 className="text-xl font-semibold mb-6">Your Analysis</h2>
            <div>{generateAnalysis(answers)}</div>
          </>
        ) : (
          <div>
            <div className="bg-black text-gray-100 py-4 px-4 text-center mb-2 rounded-t-lg">
              <h1>Take your Test</h1>
            </div>
            <div className="flex items-center mb-4 p-2">
              <img
                src="/images/femdoc.avif" // replace with actual avatar image path
                alt="Avatar"
                className="rounded-full mr-4"
                width={50}
                height={50}
              />
              <div>
                <p className="text-sm text-gray-700">Hi!</p>
                <p className="font-bold text-gray-900">
                  I am Geet, your personal health coach.
                </p>
              </div>
            </div>
            {history.length > 0 && (
              <button
                className="text-blue-700 text-sm flex items-center mb-4 ml-2"
                onClick={handleBackClick}
              >
                <FaArrowLeft className="mr-2" /> Back to previous question
              </button>
            )}
            {answers.map((answer, index) => {
              const question = questions.find((q) => q.id === answer.questionId)
              return (
                <div key={index} className="mb-2 p-2">
                  <p className="text-sm font-semibold">{question.text}</p>
                  <div className="flex justify-end items-center">
                    <p className="text-sm text-right my-2 py-2 border border-blue-500 rounded-lg px-2 w-fit cursor-pointer">
                      {answer.option.text}{' '}
                    </p>
                  </div>
                </div>
              )
            })}
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-sm font-semibold">{currentQuestion.text}</p>
              <div className="mt-4 space-y-2 md:space-y-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    className="w-full flex flex-col text-left p-2 border rounded-md hover:bg-gray-200"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelfAssessment
