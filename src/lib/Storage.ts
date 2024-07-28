"use client";
import { NoteType } from "@/types";
import { LOCALSTORAGEKEY } from "../../constant";
import { date } from "zod";
// import slugify from "slugify";

export function addToLocalData({ id, title, content, timestamp }: NoteType) {
  console.log("-- in add func");
  // console.log("🚀 ~ addToLocalData ~ id:", id);
  // id = slugify(id);
  // console.log("🚀 ~ addToLocalData ~ id:", id);
  try {
    // const timestamp = new Date().toISOString;
    const data = { id, title, content, timestamp };

    let dataList = getLocalData();
    console.log("🚀 ~ addToLocalData ~ dataList:", dataList);
    if (!dataList) {
      dataList = [data];
    } else {
      dataList.push(data);
    }
    console.log("🚀 19 ~ addToLocalData ~ dataList:", dataList);
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify({ notes: dataList }));
    return true;
  } catch (error) {
    console.log("🚀 ~ addToLocalData ~ error:", error);

    return false;
  }
}

export function getLocalData(): NoteType[] {
  let dataList;
  try {
    const jsonData = localStorage.getItem(LOCALSTORAGEKEY);
    if (jsonData) {
      dataList = JSON.parse(jsonData) || {};
      console.log("get", dataList);
      if (!dataList) {
        return [];
      }
      return dataList.notes.map((item: NoteType) => {
        const timestamp = new Date(item.timestamp);
        return {
          id: item.id,
          title: item.title,
          content: item.content,
          timestamp,
        };
      });
    }
  } catch (error) {
    console.log("🚀 ~ getLocalData ~ error:", error);
  }
}
