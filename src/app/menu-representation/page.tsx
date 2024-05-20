import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { ImNewTab } from "react-icons/im";
import { PiDownloadSimple } from "react-icons/pi";
import { IoBookmarksOutline } from "react-icons/io5";

import { FaHistory } from "react-icons/fa";

const items = [
  { name: "Home", icon: <IoHomeOutline /> },
  { name: "New Tab", icon: <ImNewTab /> },
  { name: "Downloads", icon: <PiDownloadSimple /> },
  { name: "Bookmarks", icon: <IoBookmarksOutline /> },
  { name: "History", icon: <FaHistory /> },
];

export default function MenuRepresentation() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-500 to-blue-800">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-center items-center gap-4 bg-gray-300 rounded-md p-4 h-2/3">
            <div className="flex flex-col gap-4 bg-white rounded-md h-full w-[80%] items-start justify-center p-3">
              {items.map((item, index) => (
                <div key={item.name} className="w-full">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="">{item.name}</div>
                  </div>
                  <div className="h-px bg-gray-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-center items-center gap-4 bg-gray-300 rounded-md p-4 h-2/3">
            <div className="flex flex-col gap-4 bg-white rounded-md h-full w-[80%] items-start justify-center p-3">
              {items.map((item, index) => (
                <div key={item.name} className="w-full">
                  <div className="flex flex-row gap-2 items-center">
                    {item.icon}
                    <div className="">{item.name}</div>
                  </div>
                  <div className="h-px bg-gray-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
