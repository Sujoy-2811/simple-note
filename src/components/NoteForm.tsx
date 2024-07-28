"use client";

import React, { useEffect, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { addToLocalData, updateToLocalData } from "@/lib/Storage";
import { getLocalData } from "@/lib/Storage";
const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters." })
    .max(50, { message: "Title must not be longer than 50 characters." }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters." })
    .max(300, { message: "Content must not be longer than 300 characters." }),
});

export default function NoteForm({ id }: { id: string }) {
  // const [data, setData] = useState<{ title: string; content: string }>({
  //   title: "",
  //   content: "",
  // });
  // const [content, setContent] = useState<string | undefined>();
  let title = "",
    content = "";
  let timestamp: Date;
  // useEffect(() => {
  if (id) {
    const list = getLocalData();
    console.log("🚀 ~ useEffect ~ list:", list);
    if (list) {
      const rawData = getLocalData()?.find((item) => item.id === id);
      // console.log("🚀 ~ useEffect ~ data:", data);
      if (rawData?.title && rawData?.content) {
        // setData({ title: rawData.title, content: rawData.content });
        title = rawData.title;
        content = rawData.content;
        timestamp = rawData.timestamp;
      }
    }
  }
  // }, [id]);
  console.log(title, content);

  const closeForm = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // title: "",
      // content: "",
      title: title,
      content: content,
    },
  });

  const router = useRouter();

  // -submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (id) {
      updateToLocalData({
        id,
        title: values.title,
        content: values.content,
        timestamp,
      });
    } else {
      const timestamp = new Date();
      id = values.title.substring(0, 5) + Math.random().toString(7);
      addToLocalData({
        id,
        title: values.title,
        content: values.content,
        timestamp,
      });
    }
    router.replace("/");
  }
  const ref = useRef();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  sm:min-w-[450px] py-4 "
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Note Title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter Note Content"
                  className="resize-none  min-h-44 "
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" w-full flex  justify-end  space-x-4 sm:space-x-8">
          <Button
            type="button"
            onClick={() => {
              closeForm.replace("/");
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
