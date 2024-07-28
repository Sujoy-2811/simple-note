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
export function updateToLocalData({ id, title, content, timestamp }: NoteType) {
  console.log("-- in update func");
  // console.log("🚀 ~ addToLocalData ~ id:", id);
  // id = slugify(id);
  // console.log("🚀 ~ addToLocalData ~ id:", id);
  try {
    // const timestamp = new Date().toISOString;
    const data = { id, title, content, timestamp };

    let dataList = getLocalData();
    console.log("🚀 ~ updateToLocalData ~ dataList:", dataList);
    if (!dataList) {
      console.log("-- update  no avaible to modify");
    } else {
      if (!dataList.find((item) => item.id === data.id)) {
        console.log("nomatch dat found");
        return false;
      }
      const newDataList = dataList.map((item) => {
        if (item.id === data.id) {
          return { ...data, id: item.id };
        }
        return item;
      });
      console.log("🚀 19 ~ updateToLocalData ~ dataList:", newDataList);
      localStorage.setItem(
        LOCALSTORAGEKEY,
        JSON.stringify({ notes: newDataList })
      );
      return true;
    }
  } catch (error) {
    console.log("🚀 ~ updateToLocalData ~ error:", error);

    return false;
  }
}
export function deleteFromLocalData({ id }: { id: string }) {
  console.log("-- in delete func");
  // console.log("🚀 ~ addToLocalData ~ id:", id);
  // id = slugify(id);
  // console.log("🚀 ~ addToLocalData ~ id:", id);
  try {
    // const timestamp = new Date().toISOString;

    let dataList = getLocalData();
    console.log("🚀 ~ updateToLocalData ~ dataList:", dataList);
    if (!dataList) {
      console.log("-- delete  no avaible to modify");
    } else {
      if (!dataList.find((item) => item.id === id)) {
        console.log("no match data found");
        return false;
      }
      const newDataList = dataList.filter((item) => item.id !== id);
      console.log("🚀 19 ~ deleteToLocalData ~ dataList:", newDataList);
      localStorage.setItem(
        LOCALSTORAGEKEY,
        JSON.stringify({ notes: newDataList })
      );
      return true;
    }
  } catch (error) {
    console.log("🚀 ~ deleteToLocalData ~ error:", error);

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
