import React from "react";
import mountain from "/public/mountain.jpg";
import Image from "next/image";

export default function ContrastOverlayExample() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-950 to-gray-700">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end relative">
          <Image
            src={mountain}
            alt="Mountain"
            className="w-[400px] h-[250px] rounded-lg"
          />
          <h3 className="text-lg absolute bottom-6 left-8 text-white">
            Beautiful Northern Lights
          </h3>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end relative">
          <Image
            src={mountain}
            alt="Mountain"
            className="w-[400px] h-[250px] rounded-lg brightness-[0.45]"
          />
          <h3 className="text-lg absolute bottom-6 left-8 text-white">
            Beautiful Northern Lights
          </h3>
        </div>
      </div>
    </div>
  );
}
