import React from "react";

const Navbar = () => {
  return (
    <nav className="py-2 px-8 flex w-full items-center">
      <div>
        <a href="#" className="text-gray-300 mr-1 text-sm">
          Home
        </a>
        <span className="text-gray-300 mr-1 text-sm">{">"}</span>
        <a href="#" className="text-gray-600 mr-1 text-sm">
          Dashboard
        </a>
      </div>
      <div className="ml-auto">
        <input
          className="w-[500px] border-[1px] border-gray-300 py-1 px-2 rounded"
          name="search"
          id="search"
          type="search"
          placeholder="Search anything..."
        />
      </div>
    </nav>
  );
};

export default Navbar;
