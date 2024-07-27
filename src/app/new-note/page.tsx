import NoteForm from "@/components/NoteForm";
import React from "react";

export default function NewNote() {
  return (
    <div className="w-full sm:flex  sm:justify-center sm:items-center sm:grow sm:justify-center">
      <NoteForm />
    </div>
  );
}
