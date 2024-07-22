// Modal.js
import React from 'react'

const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-[1000] overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full h-full overflow-y-auto z-[1000]">
        <div className="flex flex-col justify-center items-center h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
