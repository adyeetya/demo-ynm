"use client";
import React, { useState } from "react";

const DragAndDrop = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy"; // Show a copy icon
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Get files from the drop event
    const files = Array.from(e.dataTransfer.items)
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile());

    setDroppedFiles((prevFiles) => [...prevFiles, ...files]);
    console.log(files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-gray-100"
    >
      <p className="text-gray-700">Drag and drop files or folders here</p>
      <ul className="mt-4 text-left">
        {droppedFiles.map((file, index) => (
          <li key={index} className="text-sm text-gray-600">
            {file.name} ({(file.size / 1024).toFixed(2)} KB)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDrop;
