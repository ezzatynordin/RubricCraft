// CreateSubject.jsx
import React, { useState } from "react";
import IndexPage from "./IndexPage";
import { Link } from "react-router-dom"; // Import Link

const CreateSubject = () => {
  // State variables to store form data
  const [courseCode, setCourseCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [unit, setUnit] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with form data, such as sending it to the backend
    console.log("Course Code:", courseCode);
    console.log("Subject Name:", subjectName);
    console.log("Unit:", unit);
    // Reset form fields after submission
    setCourseCode("");
    setSubjectName("");
    setUnit("");
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    // Reset form fields
    setCourseCode("");
    setSubjectName("");
    setUnit("");
  };

  return (
    <div className="flex">
      <div>
        <IndexPage />
      </div>
      <div className="pl-20 pr-20 flex-grow w-auto pt-10">
        <form onSubmit={handleSubmit} className="p-20 bg-white-800 text-black h-full rounded-[30px] border border-gray-300">
          <div className="mb-4">
            <label htmlFor="courseCode" className="block text-lg font-medium text-gray-700">
              Course Code
            </label>
            <input
              type="text"
              id="courseCode"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subjectName" className="block text-lg font-medium text-gray-700">
              Subject Name
            </label>
            <input
              type="text"
              id="subjectName"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="unit" className="block text-lg font-medium text-gray-700">
              Unit
            </label>
            <input
              type="number"
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-[15px]"
              required
            />
          </div>
          
          <div className="flex justify-end">
            <Link to="/subject" className="mr-2 bg-red-500 text-white py-2 px-4 rounded"> {/* Use Link component */}
              Cancel
            </Link>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
              Add
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default CreateSubject;
