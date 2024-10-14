import React from "react";
import { FaRegEdit } from "react-icons/fa";
export const AccountInfo = ({ user, handleEdit, handleSave, message }) => {
  return (
    <div className="space-y-6">
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-center">Account Information</h1>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 hover:bg-white hover:text-blue-500  border hover:border-blue-500 text-white rounded focus:outline-none"
          >
            Save All Changes
          </button>
        </div>
      </div>
      <p>{message}</p>
      {/* personal info */}
      <div className="p-4 rounded bg-white">
        <h2 className="text-lg my-4">Personal Information</h2>
        <div className="flex flex-col  pb-3">
          <label className="text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <div className="flex items-center">
            <span className=" text-lg font-medium">
              +91 {user?.phoneNumber}
            </span>
          </div>
        </div>
        {[
          { label: "Name", field: "name", value: user?.name },

          { label: "Email", field: "email", value: user?.email },
        ].map((item) => (
          <div key={item.field} className="flex flex-col   pb-3">
            <label className="text-sm font-medium text-gray-600">
              {item.label}
            </label>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{item.value}</span>
              <button
                onClick={() => handleEdit(item.field)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                <FaRegEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* deliver address */}
      <div className="p-4 rounded bg-white">
        <h2 className="text-lg my-4">Delivery Information</h2>
        {[
          { label: "Address Line 1", field: "address", value: user?.address },
          { label: "Landmark", field: "landmark", value: user?.landmark },
          { label: "City", field: "city", value: user?.city },
          { label: "Pincode", field: "pincode", value: user?.pincode },
          { label: "State", field: "state", value: user?.state },
        ].map((item) => (
          <div key={item.field} className="flex flex-col pb-3">
            <label className="text-sm font-medium text-gray-600">
              {item.label}
            </label>
            <div className="flex justify-between items-center">
              <span className="mr-2 text-lg font-medium">{item.value}</span>
              <button
                onClick={() => handleEdit(item.field)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                <FaRegEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EditModal = ({
  isEditing,
  formData,
  handleChange,
  handleFieldSave,
  setIsEditing,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit {isEditing}</h2>
        <input
          type="text"
          name={isEditing}
          value={formData[isEditing]}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-4 rounded"
        />
        <div className="flex justify-end">
          <button
            onClick={() => setIsEditing(null)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleFieldSave}
            className="px-4 py-2 bg-blue-500 text-white rounded ml-2 hover:bg-blue-600 focus:outline-none"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
