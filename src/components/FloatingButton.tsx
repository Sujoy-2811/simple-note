import React from "react";
import { useEffect, useRef } from "react";
import { IoMdAdd } from "react-icons/io";

import { Button } from "./ui/button";

export const FloatingButton = () => {
  return (
    <div className="flex  space-x-2 text-4xl  p-2 sm:p-4 lg:p-8   border-2 border-amber-400 fixed right-6  bottom-28 ">
      <IoMdAdd />
      <Button className="hidden sm:inline">Add</Button>
    </div>
  );
};
