import Link from "next/link";
import React from "react";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className=" flex  m-auto justify-around text-center py-4 sm:py-6">
      <p className="flex flex-col sm:block">
        <span>
          © {date} - Designed and Developed by
          <Link
            className="text-green-600"
            href="portfolio-nine-delta-75.vercel.app"
          >
            &nbsp;Sujoy.{" "}
          </Link>
        </span>
        <span>Built with &nbsp;NextJs</span>
      </p>
    </footer>
  );
};
