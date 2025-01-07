import { Leftcorner } from "@/components/Leftcorner";
import { Middlebackground } from "@/components/Middlebackground";
import { Rigthcorner } from "@/components/Rigthcorner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen relative overflow-hidden">
      <Rigthcorner />

      <Leftcorner />
      <Middlebackground />
    </div>
  );
}
