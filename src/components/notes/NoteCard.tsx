"use client";

import React, { useEffect, useRef, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { NoteType } from "@/types";
import { getLocalData } from "@/lib/Storage";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { list } from "postcss";
import Link from "next/link";

export default function NoteCard({ id }: { id: string }) {
  let [data, setData] = useState<NoteType | undefined>();
  useEffect(() => {
    console.log("effect in note card");

    const list = getLocalData();
    if (list) {
      const data = getLocalData()?.find((item) => item.id === id);
      console.log("filter in effect , data");
      setData(data);
    }
  }, [setData]);
  const router = useRouter();
  console.log("🚀 ~ NoteCard ~ data:", data);

  if (!data) {
    return <div>No Note is found</div>;
  }
  return (
    <div className=" min-w-[80%] sm:min-w-[250px] sm:max-w-[300px] sm:min-h-[400px] sm:w-[50vw]  lg:max-w-[650px]  min-h-80 relative">
      <p className=" absolute top-0 right-0 flex  space-x-4 sm:space-x-6 text-lg sm:text-xl translate-y-[-150%]">
        <Link href={{ pathname: "/new-note", query: { id } }}>
          <FaEdit />
        </Link>
        <RiDeleteBin5Line />
        <ImCross onClick={() => router.push("/")} />
      </p>
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea>{data.content}</ScrollArea>
        </CardContent>
        <CardFooter className="flex justify-end">
          <p>{data.timestamp.getUTCDate()}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
