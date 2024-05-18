import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const items = ["Home", "Applications", "Desktop", "Downloads", "Documents"];

export default function MultiCheckboxExample() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-stone-600 to-slate-800">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col gap-4 bg-gray-300 rounded-md p-4 h-1/2">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item) => (
                <div className="flex flex-row items-center gap-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col gap-4 bg-gray-300 rounded-md p-4">
            <div className="flex flex-col justify-start gap-4">
              {items.map((item) => (
                <div className="flex flex-row items-center gap-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
