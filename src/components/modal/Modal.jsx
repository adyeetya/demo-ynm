// Modal.js
import React from 'react'

const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto">
        <div className="absolute top-0 right-0 p-4">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
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
        <div className="flex flex-col justify-center items-center h-full ">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
