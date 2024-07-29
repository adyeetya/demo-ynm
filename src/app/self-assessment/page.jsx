'use client'
import React, { useState } from 'react'
import { questions } from '../../data/questions'
import { FaArrowLeft } from 'react-icons/fa'

import { useRouter } from 'next/navigation'
import { useUser } from '@/context/userContext'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'

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
const SelfAssessmentPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [answers, setAnswers] = useState([])
  const [history, setHistory] = useState([])
  const [showAnalysis, setShowAnalysis] = useState(false)


  const router = useRouter()
  const { user } = useUser()

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



  const doneStep = () => {
    // console.log(userData)
    router.push('/self-assessment')
  }

  const handleResult = () => {
    if (!user) {
      router.push('/login?referrer=self-assessment')
    } else {
      router.push('/self-assessment/result')
    }
  }

  return (
    <div className="sm:w-[550px] md:w-[644px] lg:w-[900px] relative mx-auto z-10 min-h-[calc(100vh-64px)] flex items-center my-8">
      <div className=" rounded shadow-md">
        {showAnalysis ? (
          <div className="flex flex-col">
            <div className="bg-black flex items-center justify-between w-full sm:w-[550px] md:w-[644px] lg:w-[900px] mb-2 text-gray-100 py-4 px-4 text-center  rounded-t-lg">
              <h1>Your Answers</h1>
              <div className="z-50">
                <Link href="/" className="text-gray-200 hover:text-red-500">
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
            <div className="bg-black flex items-center justify-between  w-full sm:w-[550px] md:w-[644px] lg:w-[900px] mb-2 text-gray-100 py-4 px-4 text-center  rounded-t-lg">
              <h1>Take your Test</h1>
              <div className="z-50">
                <Link href="/" className="text-gray-200 hover:text-red-500">
                  <IoMdArrowRoundBack />
                </Link>
              </div>
            </div>
            <div className="">
              <div className="flex items-center mb-4 p-2">
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
                const question = questions.find(
                  (q) => q.id === answer.questionId
                )
                return (
                  <div key={index} className="mb-2 p-2">
                    <p className="text-sm font-semibold">{question.text}</p>
                    <div className="flex justify-end items-center">
                      <p className="text-sm text-right my-2 py-2 border border-blue-500 rounded-lg px-2 w-fit cursor-pointer">
                        {answer.option.text}
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
          </div>
        )}
      </div>
    </div>
  )
}

export default SelfAssessmentPage
