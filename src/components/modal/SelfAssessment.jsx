'use client'
import React, { useState } from 'react'

import { questions } from '../../data/questions'

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

const SelfAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [answers, setAnswers] = useState([])
  const [showAnalysis, setShowAnalysis] = useState(false)

  const handleOptionClick = (option) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, option }]
    setAnswers(newAnswers)
    const nextQuestion = questions.find((q) => q.id === option.next)
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowAnalysis(true)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4 h-[700px] overflow-y-auto">
      <div className="bg-white rounded shadow-md">
        {showAnalysis ? (
          <>
            <h2 className="text-xl font-semibold mb-6">Your Analysis</h2>
            <div>{generateAnalysis(answers)}</div>
          </>
        ) : (
          <div>
          <div className='bg-black text-white py-4 px-4 text-center mb-2 rounded-t-lg'><h1>Take your Test</h1></div>
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
            {answers.map((answer, index) => {
              const question = questions.find((q) => q.id === answer.questionId)
              return (
                <div key={index} className="mb-2 p-2">
                  <p className="text-lg font-semibold">{question.text}</p>
                  <div className="flex justify-end">
                    {' '}
                    <p className="text-lg text-right my-2 py-2 border border-blue-500 rounded-lg px-2 w-fit">
                      {answer.option.text}
                    </p>
                  </div>{' '}
                </div>
              )
            })}
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-lg font-semibold">{currentQuestion.text}</p>
              <div className="mt-4 space-y-2">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.id}
                    className="w-full text-left p-2 border rounded-md hover:bg-gray-200"
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
