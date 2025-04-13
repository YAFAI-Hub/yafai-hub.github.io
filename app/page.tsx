import { buttonVariants } from "@/components/ui/button";
// import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <Link
        href="https://github.com/YAFAI-Hub/core"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Define and Deploy Agentic interfaces.
      </h1>
      <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-muted-foreground text-left sm:text-center">
        Consume YAFAI multi agent system on any platform mobile,web,desktop or
        even terminal via YAFAI Link
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link
          href={`/guide`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>        
      </div>
      
      <div className="items-center sm;gap-6 xs;gap-6">
          <p className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-2 -mb-8 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
            <TerminalSquareIcon size={20} color="#00b30c" strokeWidth={1.5} absoluteStrokeWidth className="w-5 h-5 sm:mr-1 mt-0.5" />
            brew tap yafai-hub/yafai
          </p>
          <p className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-8 -mb-2 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
            <TerminalSquareIcon size={20} color="#00b30c" strokeWidth={1.5} absoluteStrokeWidth className="w-5 h-5 sm:mr-1 mt-0.5" />
            brew install yafai-core
          </p>
      </div>
      </div>
 
  );
}
