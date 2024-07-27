import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="bg-blue-700 w-full px-2 sm:px-4 py-5 flex justify-between items-center sticky top-0">
      <Link href="./">LOGO</Link>
      <ModeToggle />
    </nav>
  );
};
