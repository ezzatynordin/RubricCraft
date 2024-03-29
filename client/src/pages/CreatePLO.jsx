// CreatePLO.jsx
import React, { useState } from "react";
import IndexPage from "./IndexPage";
import { Link } from "react-router-dom"; // Import Link

const CreatePLO = () => {
  // State variables to store form data
  const [plo, setPLO] = useState("");
  const [ploDomain, setPloDomain] = useState("");
  const [ploDescription, setPloDescription] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with form data, such as sending it to the backend
    console.log("PLO:", plo);
    console.log("PLO Domain:", ploDomain);
    console.log("PLO Description:", ploDescription);
    // Reset form fields after submission
    setPLO("");
    setPloDomain("");
    setPloDescription("");
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    // Reset form fields
    setPLO("");
    setPloDomain("");
    setPloDescription("");
  };

  return (
    <div className="flex">
      <div>
        <IndexPage />
      </div>
      <div className="pl-20 pr-20 flex-grow w-auto pt-10">
        <form onSubmit={handleSubmit} className="p-20 bg-white-800 text-black h-full rounded-[30px] border border-gray-300">
          <div className="mb-4">
            <label htmlFor="plo" className="block text-lg font-medium text-gray-700">
              PLO
            </label>
            <input
              type="text"
              id="plo"
              value={plo}
              onChange={(e) => setPLO(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ploDomain" className="block text-lg font-medium text-gray-700">
              PLO Domain
            </label>
            <input
              type="text"
              id="ploDomain"
              value={ploDomain}
              onChange={(e) => setPloDomain(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ploDescription" className="block text-lg font-medium text-gray-700">
              PLO Description
            </label>
            <input
              type="text"
              id="ploDescription"
              value={ploDescription}
              onChange={(e) => setPloDescription(e.target.value)}
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

export default CreatePLO;
