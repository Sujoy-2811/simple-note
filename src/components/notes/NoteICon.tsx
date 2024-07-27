"use client";
import React from "react";

import { GrView } from "react-icons/gr";
import { useRouter } from "next/navigation";

export default function NoteICon({ id }: { id: number }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/${id}`);
        // router.push(`/noteId`);
      }}
    >
      <GrView />
    </div>
  );
}
