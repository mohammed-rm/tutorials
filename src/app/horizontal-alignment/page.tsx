import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function HorizontalAlignment() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-bl from-amber-800 via-cyan-900 to-amber-800">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-start gap-4 bg-gray-200 rounded-md p-4 h-2/3">
            <div className="flex flex-row justify-between items-center w-full space-x-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="john@doe.com" />
            </div>
            <div className="flex flex-row justify-between items-center w-full space-x-4">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="********" />
            </div>
            <Button className="bg-blue-600 hover:scale-105 hover:bg-green-700 transition-all duration-300 ease-in-out w-1/2">
              Log In
            </Button>
          </div>
        </div>
        <div className="w-[350px] h-[400px] bg-gray-100 rounded-md p-6 flex flex-col justify-end">
          <div className="flex flex-col justify-around items-start gap-4 bg-gray-200 rounded-md p-4 h-2/3">
            <div className="flex flex-col items-start w-full space-y-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="john@doe.com" />
            </div>
            <div className="flex flex-col items-start w-full space-y-4">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="********" />
            </div>
            <Button className="bg-blue-600 hover:scale-105 hover:bg-green-700 transition-all duration-300 ease-in-out w-full">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
