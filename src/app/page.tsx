import { Pagination } from "@/components/Pagination";
import { NavList } from "@/components/notes/NoteList";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <NavList />
      <Pagination />
    </div>
  );
}
