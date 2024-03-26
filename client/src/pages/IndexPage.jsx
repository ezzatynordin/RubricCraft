import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/4 h-full">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Sidebar Menu</h1>
          <ul className="mt-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-grow">
        {/* Navbar */}
        <header className="bg-yellow-400 p-4">
          <h1 className="text-white text-xl font-bold">Header</h1>
        </header>
        
        {/* Page content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold">Index Page</h1>
          <p>Index page content here...</p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
