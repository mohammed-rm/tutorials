import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ButtonHierarchy() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-bl from-amber-800 via-cyan-900 to-amber-800">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[450px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-center gap-4 bg-gray-100 rounded-md p-4 h-[80%] border-[1px] border-gray-150 shadow-md">
            <h2 className="text-center text-lg font-bold">Welcome Back 👋</h2>
            <div className="flex flex-col space-y-4 w-full">
              <input
                type="text"
                placeholder="Username"
                className="p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none placeholder:text-sm shadow-sm"
              />
              <div className="flex flex-col w-full space-y-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none placeholder:text-sm shadow-sm"
                />
                <span className="text-blue-400 text-right text-[12px]">
                  Forgot Password?
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Button className="w-full bg-blue-600 tracking-wider">
                Log In
              </Button>
              <Button className="w-full bg-blue-600 tracking-wider">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[450px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-center gap-4 bg-gray-100 rounded-md p-4 h-[80%] border-[1px] border-gray-150 shadow-md">
            <h2 className="text-center text-lg font-bold">Welcome Back 👋</h2>
            <div className="flex flex-col space-y-4 w-full">
              <input
                type="text"
                placeholder="Username"
                className="p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none placeholder:text-sm shadow-sm"
              />
              <div className="flex flex-col w-full space-y-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none placeholder:text-sm shadow-sm"
                />
                <span className="text-blue-400 text-right text-[12px]">
                  Forgot Password?
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Button className="w-full bg-blue-600 tracking-wider">
                Log In
              </Button>
              <Button
                className="w-full tracking-wider text-blue-400"
                variant="ghost"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
