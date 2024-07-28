"use client";

import React, { useEffect, useRef, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { NoteType } from "@/types";
import { deleteFromLocalData, getLocalData } from "@/lib/Storage";
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
import { title } from "process";

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
    // <div className=" max-w-[250px] p-2 sm:p-4 lg:p-6 border-2 sm:border-3  relative">
    <div className=" max-w-[250px] p-4 sm:p-8 sm:min-w-[250px]  sm:max-w-[70vw]  relative border-2 ">
      {/* <div className=" max-w-[80%] sm:min-w-[250px]  sm:max-w-[70vw]  relative"> */}
      <div className=" absolute top-0 right-0 flex  space-x-4 sm:space-x-6 text-lg sm:text-xl translate-y-[-150%] sm:translate-y-[-200%]">
        <Link href={{ pathname: "/new-note", query: { id } }}>
          <FaEdit />
        </Link>
        <RiDeleteBin5Line
          onClick={() => {
            deleteFromLocalData({ id });
            router.replace("/");
          }}
        />
        <ImCross onClick={() => router.push("/")} />
      </div>
      <div className="flex flex-col space-y-6 sm:space-y-10">
        <h1 className="text-xl sm:text-3xl font-bold">{data.title}</h1>
        <ScrollArea className="text-pretty text-base sm:text-2xl overflow-hidden line-clamp-6">
          {data.title}
        </ScrollArea>
        <div className="flex justify-end">
          <p>{data.timestamp.getUTCDate()}</p>
        </div>
      </div>
    </div>
  );
}
