import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex  m-auto justify-around text-center py-8 sm:py-10 lg:py-12">
      <p className="flex flex-col sm:block">
        <span>
          © 2024 - Designed and Developed by
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
