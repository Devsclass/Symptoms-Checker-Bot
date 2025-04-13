import Image from "next/image";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
interface DivBoxprop {
  children: ReactNode;
  className: string;
}
interface opBoxprop {
  headings: ReactNode;
  body: ReactNode;
  link: string;
  external: boolean;
  className: string;
}
const DivBox = ({ children, className = "" }: DivBoxprop) => {
  return (
    <div className={`flex-1 bg-back w-full flex justify-center ${className}`}>
      {children}
    </div>
  );
};
const Subopbox = ({ children, className = "" }: DivBoxprop) => {
  return (
    <div
      className={` flex-1 text-center flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};
const Opbox = ({
  headings,
  body,
  link,
  external,
  className = "",
}: opBoxprop) => {
  return (
    <Link
      href={link}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`bg-[white] rounded-4xl 
                  w-[80%] h-[35%] sm:w-[85%] sm:h-[40%] 
                  lg:w-[30%] lg:h-[55%] flex flex-col gap-1 overflow-hidden cursor-pointer ${className}`}>
      <Subopbox className=" bg-back text-3xl font-bold text-[#04619f] lg:justify-start pl-3">
        {headings}
      </Subopbox>
      <Subopbox className=" text-md lg:text-lg pl-3  items-start justify-center lg:justify-start   text-black">
        {body}
      </Subopbox>
    </Link>
  );
};
export default function Home() {
  return (
    <div
      className="relative  h-screen bg-cover bg-gray-900 bg-center before:absolute before:inset-0 before:bg-black before:opacity-40"
      style={{ backgroundImage: "url('/Home.jpg')" }}
    > 
      <div className="relative z-10 flex flex-col items-center gap-3 justify-center h-full  text-white ">
        <DivBox className="  overflow-hidden  justify-start">
          <img
            src="./next.svg"
            className="  p-3   max-w-[200px] md:max-w-[350px] lg:max-w-[400px]"
          />
        </DivBox>
        <DivBox className=" lg:pl-0 pl-[10px] text-center   items-center ">
          DeepSeek-R1 is now live and open source, rivaling OpenAI's Model o1.
          Available on web, app, and API.
        </DivBox>
        <DivBox className="flex-1 text-7xl">
          <h1 className="  bg-gradient-to-r from-[#9cc8eb] text-shadow-lg via-[#39aefb] to-[#c9d3dbec] text-transparent bg-clip-text font-bold">
            Deepseek
          </h1>
        </DivBox>
        <DivBox className=" flex lg:items-end items-center">
          <h2 className=" lg:text-5xl text-3xl text-white font-bold">
            Be Healthy with me!
          </h2>
        </DivBox>
        <DivBox className="flex  flex-col md:flex-row sm:justify-around lg:justify-center items-center lg:flex-row gap-5 lg:gap-3 min-h-[40vh]">
          <Opbox
            headings={<h1> Start now</h1>}
            body={<h4>click here to start your chat</h4>}
            link="/Login"
            external={false}
            className=" "
          />
          <Opbox
            headings={<h1> Open Soruce </h1>}
            body={<h4>click here to get teh code on github</h4>}
            link="https://github.com/Devsclass/SymptomChecker"
            external={true}
            className=""
          />
        </DivBox>
      </div>
    </div>
  );
}