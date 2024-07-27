import { NoteType } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";
import Modal from "../Modal";

export default function NotePreview({
  id,
  title,
  content,
  timestamp,
}: NoteType) {
  return (
    <Modal title="">
      <Card className="min-w-[300px] ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            {content}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end w-full text-right">
            {timestamp.getDate()}
          </div>
        </CardFooter>
      </Card>
    </Modal>
  );
}
