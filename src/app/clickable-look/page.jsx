import React from "react";

export default function ClickableLookExample() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 to-blue-700">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col items-start gap-4 bg-gray-200 rounded-md p-4">
            <h1 className="text-lg font-semibold">Master UI Design</h1>
            <p>Unleash the power of your UI design with us.</p>
            <button>Read more</button>
          </div>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col items-start gap-4 bg-gray-200 rounded-md p-4">
            <h1 className="text-lg font-semibold">Master UI Design</h1>
            <p>Unleash the power of your UI design with us.</p>
            <button className="text-blue-500 underline">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
