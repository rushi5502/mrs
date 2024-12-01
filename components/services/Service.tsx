import { FunctionComponent } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { IoCodeSlash, IoCogOutline } from "react-icons/io5";
import { FaCogs, FaTools } from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import Image from "next/image";
import { Code2Icon } from "lucide-react";
import { GoArrowRight, GoGraph } from "react-icons/go";
interface ServiceProps {
    
}
 
const Service: FunctionComponent<ServiceProps> = () => {
    return (  <>
    <div className=" text-center  py-20 z-10">
        <h2>Services Provided By Us</h2>
      <div className="  relative   flex items-center mt-24 justify-center flex-wrap gap-5">
      <div className=" absolute top-1/2 left-1/3 z-0   blur-2xl dark:blur-[80px]  dark:opacity-50  opacity-50  bg-gradient-to-r from-cyan-400 to-blue-500 w-56 h-56 rounded-full"/> 
        <div className=" absolute top-[0%] left-[54%] z-0   blur-2xl dark:blur-[80px]  dark:opacity-50   opacity-50   bg-gradient-to-r from-cyan-400 to-blue-500 w-56 h-56 rounded-full"/> 
        <Card className=" group transition-transform  overflow-hidden  relative flex   flex-col   gap-5 w-[250px] h-[250px]  py-8 bg-background/80 z-10 backdrop-blur-md border-cyan-800/20">
           
           <Image src={"/web.jpg"} className="  transition-all group-hover:scale-110 group-hover:opacity-40 top-0 left-0 absolute z-0 opacity-35" alt=" web"  height={300} width={400}/>
       
             <CardFooter className="  absolute w-full bottom-0 bg-zinc-800/40 p-2 flex   items-start flex-col gap-1 backdrop-blur-sm">
                <span className=" text-sm font-light flex items-center gap-2   "> <Code2Icon className=" h-8 w-8 p-2 bg-cyan-500/30  border-cyan-500 border    shadow-md rounded-full flex items-center justify-center text-white"/> Web Development</span>
                <p className="text-sm font-light"></p>
                <Button variant={"link"}>Get Started   <GoArrowRight /></Button>
             </CardFooter>
        </Card>
        <Card className=" group transition-transform  overflow-hidden  relative flex   flex-col   gap-5 w-[250px] h-[250px]  py-8 bg-background/80 z-10 backdrop-blur-md border-cyan-800/20">
           
           <Image src={"/datascience.jpg"} className="  transition-all group-hover:scale-110 group-hover:opacity-40 top-0 left-0 absolute z-0 opacity-35" alt="data science"  height={300} width={400}/>
       
             <CardFooter className="  absolute w-full bottom-0 bg-zinc-800/40 p-2 flex   items-start flex-col gap-1 backdrop-blur-sm">
                <span className=" text-sm font-light flex items-center gap-2   "> <GoGraph className=" h-8 w-8 p-2 bg-cyan-500/30  border-cyan-500 border    shadow-md rounded-full flex items-center justify-center text-white"/>Data Analysis</span>
                <p className="text-sm font-light"></p>
                <Button variant={"link"}>Get Started   <GoArrowRight /></Button>
             </CardFooter>
        </Card>

        <Card className=" group transition-transform  overflow-hidden  relative flex   flex-col   gap-5 w-[250px] h-[250px]  py-8 bg-background/80 z-10 backdrop-blur-md border-cyan-800/20">
           
           <Image src={"/maintane.jpg"} className="  transition-all group-hover:scale-110 group-hover:opacity-40 top-0 left-0 absolute z-0 opacity-35" alt="data"  height={300} width={400}/>
       
             <CardFooter className="  absolute w-full bottom-0 bg-zinc-800/40 p-2 flex   items-start flex-col gap-1 backdrop-blur-sm">
                <span className=" text-sm font-light flex items-center gap-2   "> <FaCogs  className=" h-8 w-8 p-2 bg-cyan-500/30  border-cyan-500 border    shadow-md rounded-full flex items-center justify-center text-white"/>Maintance</span>
                <p className="text-sm font-light"></p>
                <Button variant={"link"}>Get Started   <GoArrowRight /></Button>
             </CardFooter>
        </Card>
      </div>

    </div>
    </>);
}
 
export default Service;