import NoteForm from "@/components/NoteForm";
import React from "react";

export default function NewNote({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  return (
    <div className="w-full sm:flex  sm:justify-center sm:items-center sm:grow sm:justify-center">
      <NoteForm id={searchParams.id} />
    </div>
  );
}
