import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { ImNewTab } from "react-icons/im";
import { PiDownloadSimple } from "react-icons/pi";
import { IoBookmarksOutline } from "react-icons/io5";

import { FaHistory } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const items = [
  { name: "Home", icon: <IoHomeOutline /> },
  { name: "New Tab", icon: <ImNewTab /> },
  { name: "Downloads", icon: <PiDownloadSimple /> },
  { name: "Bookmarks", icon: <IoBookmarksOutline /> },
  { name: "History", icon: <FaHistory /> },
];

export default function MenuRepresentation() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-indigo-400 to-cyan-800">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-start gap-4 bg-gray-200 rounded-md p-4 h-2/3">
            <h1 className="text-lg font-bold">Payments settings</h1>
            <ul className="flexflex-col space-y-4 w-full">
              <div className="flex flex-row justify-between items-center">
                <li>International transactions</li>
                <Switch className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500" />
              </div>
              <div className="flex flex-row justify-between items-center">
                <li>Paying without PIN</li>
                <Switch className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500" />
              </div>
            </ul>
            <Button className="w-full bg-green-600 hover:scale-105 hover:bg-green-700 transition-all duration-300 ease-in-out">
              Save
            </Button>
          </div>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-start gap-4 bg-gray-200 rounded-md p-4 h-2/3">
            <h1 className="text-lg font-bold">Payments settings</h1>
            <ul className="flexflex-col space-y-4 w-full">
              <div className="flex flex-row justify-between items-center">
                <li>International transactions</li>
                <Switch className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500" />
              </div>
              <div className="flex flex-row justify-between items-center">
                <li>Paying without PIN</li>
                <Switch className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500" />
              </div>
            </ul>
            <Button className="w-full hover:bg-transparent bg-tranparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
