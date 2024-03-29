import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="flex pl-20 w-auto pt-10">
      <div className="bg-white-800 text-black h-full rounded-[30px] border border-gray-300">
        <div className="p-10">
          <h1 className="text-3xl font-bold">Menu</h1>
          <ul className="mt-10">
            <li className="mb-4 border-b border-gray-300"> {/* Added border class */}
              <Link to="/" className="hover:bg-orange-500 hover:text-white block py-2 px-4 rounded text-gray-500"> {/* Added hover:text-white class */}
                DASHBOARD
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-300"> {/* Added border class */}
              <Link to="/subject" className="hover:bg-orange-500 hover:text-white block py-2 px-4 rounded text-gray-500"> {/* Added hover:text-white class */}
                SUBJECT
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-300"> {/* Added border class */}
              <Link to="/plo" className="hover:bg-orange-500 hover:text-white block py-2 px-4 rounded text-gray-500"> {/* Added hover:text-white class */}
                PROGRAMME LEARNING OUTCOME
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-300"> {/* Added border class */}
              <Link to="/lt" className="hover:bg-orange-500 hover:text-white block py-2 px-4 rounded text-gray-500"> {/* Added hover:text-white class */}
                LEARNING TAXONOMY
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-300"> {/* Added border class */}
              <Link to="/ss" className="hover:bg-orange-500 hover:text-white block py-2 px-4 rounded text-gray-500"> {/* Added hover:text-white class */}
                SOFT SKILLS
              </Link>
            </li>
            <li className="mb-4 border-b border-gray-300"> {/* Added border class */}
              <Link to="/assessmentMethod" className="hover:bg-orange-500 hover:text-white block py-2 px-4 rounded text-gray-500"> {/* Added hover:text-white class */}
                ASSESSMENT METHOD
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
