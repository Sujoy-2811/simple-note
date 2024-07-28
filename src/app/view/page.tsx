"use client ";

import NoteCard from "@/components/notes/NoteCard";
import { getLocalData } from "@/lib/Storage";

export default function page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  console.log(searchParams.id);

  return (
    <main className=" h-[75vh] w-full  grow  flex items-center justify-center">
      <NoteCard id={searchParams.id} />
    </main>
  );
}
