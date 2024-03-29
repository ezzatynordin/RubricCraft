// SubjectPage.jsx
import React from "react";
import IndexPage from "./IndexPage";
import { Link } from "react-router-dom";

const PLOPage = () => {
  return (
    <div className="flex">
      <div>
        <IndexPage />
      </div>
      <div className="pl-20 pr-20 flex-grow w-auto pt-10">
        <div className="bg-white-800 text-black h-full rounded-[30px] border border-gray-300">
          <div className="p-10">
            
            <div className="flex justify-between mb-4 "> {/* Apply header class */}
              <h2 className="text-2xl font-bold">Programme Learning Outcome</h2>

              <Link to="/createPLO" className="bg-black py-2 px-4 rounded text-white "> {/* Added hover:text-white class */}
                Create
              </Link>
            </div>
            <table className="w-full subject-table"> {/* Apply subject-table class */}
              <thead>
                <tr>
                  <th className="py-2 px-4">PLO</th>
                  <th className="py-2 px-4">Domain</th>
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">Practical Skills</td>
                  <td className="py-2 px-4">Adapt knowledge...</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PLOPage;
