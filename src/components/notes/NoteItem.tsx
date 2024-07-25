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

export const NoteItem = ({ id, title, content, timestamp }: NoteType) => {
  return (
    <Card className="min-w-[300px]  flex flex-col">
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
            <FaEdit />
            <RiDeleteBin5Line />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
