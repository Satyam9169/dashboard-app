import React from "react";

const Header = () => {
  return (
    <div className="flex w-full px-8 my-4">
      <h2 className="font-semibold mr-auto">CNAPP Dashboard</h2>
      <button className="py-1 px-2 rounded flex items-center border-gray-300 bg-white text-gray-500 text-sm border-[1px] mr-2">
        Add Widget +
      </button>
      <button className="py-1 px-2 rounded flex items-center border-gray-300 bg-white text-gray-500 text-sm border-[1px] mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 0 24 24"
          width="18px"
          className="fill-gray-400">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
        </svg>
      </button>
      <button className="py-1 px-2 rounded flex items-center border-gray-300 bg-white text-gray-500 text-sm border-[1px] mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 0 24 24"
          width="18px"
          className="fill-gray-400">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
      <button className="py-1 px-2 rounded flex items-center border-gray-300 bg-white text-gray-500 text-sm border-[1px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="18px"
          viewBox="0 0 24 24"
          width="18px"
          className="fill-blue-800 pr-1 ">
          <g>
            <rect fill="none" height="24" width="24" x="0" />
          </g>
          <g>
            <g>
              <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z" />
            </g>
          </g>
        </svg>
        <span className="text-blue-800 pl-1 border-l-[1px] border-blue-800">
          Last 2 Days
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 0 24 24"
          width="18px"
          className="fill-blue-800">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
        </svg>
      </button>
    </div>
  );
};

export default Header;
