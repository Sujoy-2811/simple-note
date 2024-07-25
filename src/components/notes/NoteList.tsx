import React from "react";
import { noteList } from "../../../constant";
import { NoteItem } from "./NoteItem";
import { NoteType } from "@/types";

export const NavList = () => {
  return (
    <div className="flex flex-col items-center  gap-3 sm:grid sm:grid-cols-2 sm:place-items-stretch lg:grid-cols-3 sm:justify-items-center  w-full  ">
      {noteList.map((item: NoteType) => (
        <NoteItem key={item.id} {...item} />
      ))}
    </div>
  );
};
