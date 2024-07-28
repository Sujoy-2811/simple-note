"use client";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { NoteType } from "@/types";
import { date } from "zod";
import NotePreview from "./NotePreview";
import NoteICon from "./NoteICon";
import Link from "next/link";
import { deleteFromLocalData } from "@/lib/Storage";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

export const NoteItem = ({
  id = "",
  title = "",
  content = "",
  timestamp = new Date("2023-11-05T10:05:00Z"),
}: NoteType) => {
  const router = useRouter();

  return (
    <Card className=" flex flex-col line-clamp-1 overflow-hidden ">
      {/* <Card className="min-w-[250px] w-[80vw] sm:w-[300px]   flex flex-col line-clamp-1 overflow-hidden "> */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="line-clamp-4 grow">
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between mt-2">
          <span>{timestamp.getDate()}</span>
          <div className="flex gap-6 sm:gap-10 text-lg ">
            <NoteICon id={id} />
            <Link href={{ pathname: "/new-note", query: { id } }}>
              <FaEdit />
            </Link>
            {/* <RiDeleteBin5Line
              onClick={() => {
                deleteFromLocalData({ id });
                router.refresh();
              }}
            /> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
