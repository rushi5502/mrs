import { FunctionComponent } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

interface ServiceProps {
    
}
 
const Service: FunctionComponent<ServiceProps> = () => {
    return (  <>
    <div className=" text-center  py-20">
        <h2>Services Provided By Us</h2>
      <div className="  relative container flex items-center mt-24 justify-center gap-5">
      <div className=" absolute top-1/2 left-1/3 z-0   blur-2xl dark:blur-[70px]  dark:opacity-80  opacity-50  bg-gradient-to-r from-cyan-400 to-blue-500 w-56 h-56 rounded-full"/> 
        <div className=" absolute top-[0%] left-[54%] z-0   blur-2xl dark:blur-[70px]  dark:opacity-80   opacity-50   bg-gradient-to-r from-cyan-400 to-blue-500 w-56 h-56 rounded-full"/> 
        <Card className=" w-[250px] h-[250px] p-5 py-8 bg-background/20 z-50 backdrop-blur-md border-cyan-800/20">
            <CardTitle className=" text-xl font-light">
                Web Development
            </CardTitle>
            <CardContent>
                asch
            </CardContent>
        </Card>

        <Card className=" w-[250px] h-[250px] p-5 py-8 bg-background/20 z-50 backdrop-blur-md border-cyan-800/20 shadow-md">
            <CardTitle className=" text-xl font-light">
                Web Development
            </CardTitle>
            <CardContent>
                asch
            </CardContent>
        </Card>

        <Card className=" w-[250px] h-[250px] p-5 py-8 bg-background/20 z-50 backdrop-blur-md border-cyan-800/20">
            <CardTitle className=" text-xl font-light">
                Web Development
            </CardTitle>
            <CardContent>
                asch
            </CardContent>
        </Card>
      </div>

    </div>
    </>);
}
 
export default Service;