"use client";

import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
 
 

export function DotPatternDemo({children}:{children:React.ReactNode}) {
  return (
    <div className="relative flex z-0 h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   bg-background ">
      {children}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
