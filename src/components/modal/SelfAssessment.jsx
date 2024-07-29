'use client'
import React, { useState } from 'react'
import { questions } from '../../data/questions'
import { FaArrowLeft } from 'react-icons/fa'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { RxReload } from 'react-icons/rx'
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
  const [showModal, setShowModal] = useState(false)
  const [modalStep, setModalStep] = useState(1)
  const [userData, setUserData] = useState({
    mobile: '',
    otp: '',
    name: '',
    email: '',
  })
  const router = useRouter()

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

  const nextStep = () => {
    setModalStep(modalStep + 1)
  }

  const doneStep = () => {
    setShowModal(false)
    // console.log(userData)
    router.push('/self-assessment')
  }

  const renderModalContent = () => {
    switch (modalStep) {
      case 1:
        return (
          <div className="w-96 p-4 pt-8 border border-gray-300 rounded-lg shadow-xl bg-white relative ">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500"
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
            <h2 className="text-xl font-semibold mb-4">
              Enter your mobile number
            </h2>
            <input
              type="text"
              value={userData.mobile}
              onChange={(e) =>
                setUserData({ ...userData, mobile: e.target.value })
              }
              className="border p-2 w-full mb-4"
              placeholder="Mobile Number"
            />
            <div className="flex justify-center items-center">
              <button
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="w-96 p-4 pt-8 border border-gray-300 rounded-lg shadow-xl bg-white relative ">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500"
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
            <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
            <input
              type="text"
              value={userData.otp}
              onChange={(e) =>
                setUserData({ ...userData, otp: e.target.value })
              }
              className="border p-2 w-full mb-4"
              placeholder="OTP"
            />
            <div className="flex justify-center items-center my-2 text-sm">
              <button className="flex justify-center items-center gap-2 hover:text-red-500">
                <RxReload /> Resend OTP
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Verify OTP
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="w-96 p-4 pt-8 border border-gray-300 rounded-lg shadow-xl bg-white relative ">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500"
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
            <h2 className="text-xl font-semibold mb-4">
              Enter your name and email
            </h2>
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="border p-2 w-full mb-4"
              placeholder="Name"
            />
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="border p-2 w-full mb-4"
              placeholder="Email"
            />
            <div className="flex justify-center items-center">
              <button
                onClick={doneStep}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Done
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="sm:w-[550px] md:w-[644px] lg:w-[900px] relative mx-auto z-10">
      <div className=" rounded shadow-md">
        {showAnalysis ? (
          <div className="flex flex-col">
            <div className="bg-black flex items-center justify-between fixed w-full sm:w-[550px] md:w-[644px] lg:w-[900px] mb-2 text-gray-100 py-4 px-4 text-center  rounded-t-lg">
              <h1>Your Answers</h1>
              <div className="z-50">
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
            </div>
            <div className="h-[80vh] overflow-y-auto">
              <div className="mt-20 text-sm">{generateAnalysis(answers)}</div>
            </div>
            <div className="flex justify-center items-center py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-fit text-white px-4 py-2 rounded"
                onClick={() => setShowModal(true)}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-black flex items-center justify-between  fixed w-full sm:w-[550px] md:w-[644px] lg:w-[900px] mb-2 text-gray-100 py-4 px-4 text-center  rounded-t-lg">
              <h1>Take your Test</h1>
              <div className="z-50">
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
            </div>
            <div className="h-[80vh] overflow-y-auto">
              <div className="flex items-center mb-4 p-2 mt-20">
                <img
                  src="/images/femdoc.png"
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

      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
          nextStep={nextStep}
          doneStep={doneStep}
          step={modalStep}
        >
          {renderModalContent()}
        </Modal>
      )}
    </div>
  )
}

export default SelfAssessment
