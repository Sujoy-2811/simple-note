"use client";
import React from "react";

import { GrView } from "react-icons/gr";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NoteICon({ id }: { id: string }) {
  const router = useRouter();
  return (
    <Link href={{ pathname: "/view", query: { id } }}>
      <GrView />
    </Link>
  );
}
