import { FloatingButton } from "@/components/FloatingButton";
import NoteForm from "@/components/NoteForm";
import { Pagination } from "@/components/Pagination";
import { NoteList } from "@/components/notes/NoteList";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 w-full h-full my-3 sm:my-6">
      <NoteList />
      {/* <div className="border-8 border-solid">
        <NoteForm />
      </div> */}
      <Pagination />
      <FloatingButton />
    </div>
  );
}
