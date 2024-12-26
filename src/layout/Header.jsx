import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Quiz App</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/quizpage" className="hover:text-yellow-400 transition">
            Quiz Page
          </Link>
          <Link to="/resultpage" className="hover:text-yellow-400 transition">
            Result Page
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
