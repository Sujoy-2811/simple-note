"use client";

import React from "react";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Modal({ children , title= "New Note" }: Readonly<{ children: React.ReactNode , title : String }>) {
  const router = useRouter();
  return (
    <div>
      <Dialog
        defaultOpen={true}
        open={true}
        onOpenChange={() => {
          router.back();
        }}
      >
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {children}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal;
