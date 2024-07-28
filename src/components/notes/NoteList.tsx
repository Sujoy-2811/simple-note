"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { LOCALSTORAGEKEY, noteList } from "../../../constant";
import { NoteItem } from "./NoteItem";
import { NoteType } from "@/types";

import { getLocalData } from "@/lib/Storage";

export const NoteList = () => {
  let [dataList, setDataList] = useState<NoteType[]>([]);
  useEffect(() => {
    console.log("----------effect", getLocalData());

    setDataList(getLocalData());
    console.log("🚀 ~ useEffect ~ dataList:", dataList);
  }, [setDataList]);

  if (!dataList) {
    console.log("🚀 ~17 ~ dataList:", dataList);
    return <div>No</div>;
  }
  console.log("🚀 ~19 ~ dataList:", dataList);
  return (
    <div className=" grid grid-cols-1  gap-3 sm:gap-4 lg:gap-6  sm:grid-cols-2  lg:grid-cols-3  w-full  ">
      {dataList.map((item: NoteType) => (
        <NoteItem key={item.id} {...item} />
      ))}
    </div>
  );
};
