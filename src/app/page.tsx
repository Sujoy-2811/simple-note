"use client";

import { FloatingButton } from "@/components/FloatingButton";
import NoteForm from "@/components/NoteForm";
import { Pagination } from "@/components/Pagination";
import { NoteList } from "@/components/notes/NoteList";
import { getLocalLength } from "@/lib/Storage";
import { useState, useEffect } from "react";

export default function Home() {
  const number = getLocalLength() || 0;
  console.log("🚀 ~ Home ~ getLocalLength:", getLocalLength());
  console.log("🚀 ~ Home ~ number:", number);
  let length = Math.round(number / 12);

  length = length * 12 === number ? length : length + 1;
  const [curr, setCurr] = useState(1);
  console.log("🚀 ~ Home ~ length:", length);
  return (
    <div className="flex flex-col space-y-4 w-full h-full my-3 sm:my-6">
      <NoteList />
      {/* <div className="border-8 border-solid">
        <NoteForm />
      </div> */}
      <Pagination {...{ length, curr, setCurr }} />
      <FloatingButton />
    </div>
  );
}
