import Modal from "@/components/Modal";
import NoteForm from "@/components/NoteForm";
import React from "react";

export default function ModalNewNote() {
  return (
    <Modal title="New Note" >
      <NoteForm />
    </Modal>
  );
}
