import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex  m-auto justify-around text-center p-8">
      <p>
        © 2024 - Designed and Developed by
        <Link
          className="text-green-600"
          href="portfolio-nine-delta-75.vercel.app"
        >
          &nbsp;Sujoy.&nbsp;
        </Link>
        Built with &nbsp;NextJs ;
      </p>
    </footer>
  );
};
