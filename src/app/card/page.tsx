import React from "react";

export default function CardExample() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-xs bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg rounded-lg overflow-hidden p-4">
        <h1 className="text-white text-xl font-semibold">
          Welcome to Hopymed!
        </h1>
        <p className="text-white mt-2">
          Your destination for professional web design and development.
        </p>
      </div>
    </div>
  );
}
