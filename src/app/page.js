import { Leftcorner } from "@/components/Leftcorner";
import { Rigthcorner } from "@/components/Rigthcorner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <Rigthcorner />
      <Leftcorner />
    </div>
  );
}
