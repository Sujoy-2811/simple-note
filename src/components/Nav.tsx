import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className=" border-red-700 border-4 border-solid w-full px-1 py-5 flex justify-between sticky top-0">
      <Link href="./">LOGO</Link>
      <ModeToggle />
    </nav>
  );
};
