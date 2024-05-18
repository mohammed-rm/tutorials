import React from "react";

export default function Harmony() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-700">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col items-center gap-4 bg-gray-300 rounded-2xl p-4">
            <div className="rounded-full bg-blue-500 w-12 h-12" />
            <p className="text-xl font-bold">Hello there 👋</p>
            <button className="bg-blue-700 p-4 w-full text-gray-100">
              Follow
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col items-center gap-4 bg-gray-300 rounded-2xl p-4">
            <div className="rounded-full bg-blue-500 w-12 h-12" />
            <p className="text-xl font-bold">Hello there 👋</p>
            <button className="bg-blue-700 p-4 w-full text-gray-100 rounded-xl">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
