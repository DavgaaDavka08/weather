import { Leftpinecone } from "@/icons/Leftpinecone";
import { Rigthpinecone } from "@/icons/Rigthpinecone";

export const Middlebackground = () => {
  return (
    <div className="left-[450px] top-[-100px] flex flex-col mr-auto absolute w-[1340px] h-[1340px] rounded-full border-2 border-muted-foreground/20 justify-center items-center">
      <div className="flex flex-col mr-auto absolute w-[940px] h-[940px] rounded-full border-2 border-muted-foreground/20 justify-center items-center">
        <div className="flex flex-col mr-auto absolute w-[540px] h-[540px] rounded-full border-2 border-muted-foreground/20  justify-center items-center">
          <div className="flex flex-col mr-auto absolute w-[340px] h-[340px] rounded-full border-2 border-muted-foreground/20  justify-center items-center">
            <div className="flex gap-[10px] mr-auto absolute w-[140px] h-[140px] rounded-full border-2 border-muted-foreground/20  justify-center items-center  bg-[#F3F4F6]">
              <Rigthpinecone />
              <Leftpinecone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
