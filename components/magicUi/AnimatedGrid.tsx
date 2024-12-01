import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { Label } from "../ui/label";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

export function AnimatedGrid() {
  return (
    <div className="relative flex h-[500px] w-full    overflow-hidden rounded-lg   bg-transparent p-20 md:shadow-xl">
     <div>
     <p className="z-10 whitespace-pre-wrap  text-3xl font-medium tracking-tighter text-black dark:text-white">
         Mrs Solution
      </p>

      <div className=" mt-4 flex flex-col gap-6">
    <div className=" flex flex-col gap-1">
    <span className=" flex items-center gap-2"><CiMail /> Email</span>  
    <Label>mrssolution@gmail.com</Label>
    </div>

    <div className=" flex flex-col gap-1">
    <span className=" flex items-center gap-2"> <CiPhone />Phone</span>  
    <Label>+918855964895</Label>
    </div>

    <div className=" flex flex-col gap-1">
    <span className=" flex items-center gap-2"> <CiLocationOn />Location</span> 
    <Label>Pimple Gurav,Om heights,office 104</Label>
    </div>
      </div>
     </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
