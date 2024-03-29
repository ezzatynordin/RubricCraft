import React from "react";
import IndexPage from "./IndexPage";
import { Link } from "react-router-dom";

const LTPage = () => {
  return (
    <div className="flex">
      <div>
        <IndexPage />
      </div>
      <div className="pl-20 pr-20 flex-grow w-auto pt-10">
        <div className="bg-white-800 text-black h-full rounded-[30px] border border-gray-300">
          <div className="p-10">
          <div className="flex justify-between mb-4"> {/* Apply header class */}
              <h2 className="text-2xl font-bold ">Learning Taxonomy</h2>
              <Link to="/createSubject" className="bg-black py-2 px-4 rounded text-white "> {/* Added hover:text-white class */}
                Create
              </Link>
            </div>
            <table className="w-full subject-table">
              <thead>
                <tr>
                  <th className="py-2 px-4">Attribute</th>
                  <th className="py-2 px-4">Level</th>
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4" rowSpan="3">Cognitive</td>
                  <td className="py-2 px-4">Level C1</td>
                  <td className="py-2 px-4">Remembering: Recall facts and basic concepts</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Level C2</td>
                  <td className="py-2 px-4">Understanding: Understand the meaning of facts and concepts</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Level C3</td>
                  <td className="py-2 px-4">Applying: Use information in new situations</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                {/* Add more rows for other cognitive levels */}
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4" rowSpan="3">Psychomotor</td>
                  <td className="py-2 px-4">Level P1</td>
                  <td className="py-2 px-4">Imitation: Copying actions without necessarily understanding them</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Level P2</td>
                  <td className="py-2 px-4">Manipulation: Performing a task with some confidence and proficiency</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Level P3</td>
                  <td className="py-2 px-4">Articulation: Performing a task with expert proficiency</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                {/* Add more rows for other psychomotor levels */}
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4" rowSpan="3">Affective</td>
                  <td className="py-2 px-4">Level A1</td>
                  <td className="py-2 px-4">Receiving: Being aware of or attending to something in the environment</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Level A2</td>
                  <td className="py-2 px-4">Responding: Reacting to something in the environment</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-4">Level A3</td>
                  <td className="py-2 px-4">Valuing: Attaching a value to something in the environment</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
                {/* Add more rows for other affective levels */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTPage;
