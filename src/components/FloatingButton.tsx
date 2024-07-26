import React from "react";
import { useEffect, useRef } from "react";
import { IoMdAdd } from "react-icons/io";

import { Button } from "./ui/button";

export const FloatingButton = () => {
  return (
    <div className="flex  space-x-2 text-4xl   p-2 sm:px-4 lg:py-3 lg:px-6  rounded-md border-2 border-amber-400 fixed right-6  bottom-14 sm:bottom-28  bg-blue-400">
      <IoMdAdd />
      <Button className="hidden sm:inline">Add</Button>
    </div>
  );
};
