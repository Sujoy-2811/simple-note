import NoteForm from "@/components/NoteForm";
import NotePreview from "@/components/notes/NotePreview";
import { NoteType } from "@/types";
import React from "react";
import { noteList } from "../../../../constant";

export default function ModalViewNote({
  params,
}: {
  params: { noteId: String };
}) {
  const note: NoteType | undefined = noteList.find((item) => {
    console.log("--", item.id, +params.noteId, item.id === +params.noteId);

    return item.id === +params.noteId;
  });
  console.log(note, params.noteId);

  if (!note) {
    return <div>no note id is found</div>;
  }

  return (
    <div className="w-full grow">
      asdasdad inter
      <NotePreview {...note} />
    </div>
  );
}
