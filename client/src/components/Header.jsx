import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl w-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-700">state</span>
            <span className="text-slate-500">Spapa</span>
          </h1>
        </Link>
        <form className="bg-slate-100 flex items-center ">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent p-2 rounded-lg focus:outline-none w-20 sm:w-40"
          />
          <FaSearch className="text-slate-500 m-2" />
        </form>
        <ul className="flex items-center gap-3">
          <li className="hidden sm:inline hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className=" hidden sm:inline hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="sm:inline hover:underline">
            <Link to="/signin">Signin</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
