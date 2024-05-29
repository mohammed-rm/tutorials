import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ColorPsychology() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 via-blue-600 to-pink-300">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-center gap-4 bg-gray-200 rounded-md p-4 h-1/2 border-[1px] border-blue-800 border-opacity-30 shadow-xl">
            <h2 className="text-[18px] font-semibold">Delete Item</h2>
            <p className="text-center text-[14px] text-gray-500">
              Are you sure you want to delete this item?
            </p>
            <div className="flex flex-row gap-4 w-[90%]">
              <Button
                className="w-full tracking-wider text-gray-600"
                variant="outline"
              >
                Cancel
              </Button>
              <Button className="w-full bg-blue-600 tracking-wider">
                Delete
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-center gap-4 bg-gray-200 rounded-md p-4 h-1/2 border-[1px] border-blue-800 border-opacity-30 shadow-xl">
            <h2 className="text-[18px] font-semibold">Delete Item</h2>
            <p className="text-center text-[14px] text-gray-500">
              Are you sure you want to delete this item?
            </p>
            <div className="flex flex-row gap-4 w-[90%]">
              <Button
                className="w-full tracking-wider text-gray-600"
                variant="outline"
              >
                Cancel
              </Button>
              <Button className="w-full tracking-wider" variant="destructive">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
