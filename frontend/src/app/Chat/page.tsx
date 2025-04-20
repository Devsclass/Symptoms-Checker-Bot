"use client";
import React, { useState, ReactNode } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import ConversationList from "../Components/ConversationList";
import {Convertype} from "../Components/Types"
import Conversationpanel from "../Components/Conversationpanel";

type pageProps = object;

const Sidepanel = ({
  sideopen,
  children,
  className,
}: {
  sideopen: boolean;
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`
    absolute md:relative
    transition-all duration-500 ease-in-out
    ${
      sideopen
        ? "translate-x-0 lg:w-[20vw] md:w-[30vw]"
        : "-translate-x-full md:translate-x-0 lg:w-0 md:w-0 overflow-hidden"
    }
    w-[60vw]  // Mobile width
    h-full  ${className}
  `}
    >
      {children}
    </div>
  );
};

const Mainpanel = ({
  sideopen,
  children,
  className = "",
}: {
  sideopen: boolean;
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`
            transition-all duration-500 ease-in-out
            ${
              sideopen ? "lg:w-[80vw] md:w-[70vw]" : "lg:w-[100vw] md:w-[100vw]"
            }
            
            w-full relative  // Mobile always full width
             h-full ${className}
          `}
    >
      {children}
    </div>
  );
};

const Page: React.FC<pageProps> = () => {
    
  const [sideopen, setsideopen] = useState<boolean>(false);
  const [Conversations,SetConversations]=useState<Convertype []>([])
  const [selectedconversation,setselectedconversation]=useState<string>("")
   const [firstmessage,setfirstmessage]=useState<boolean>(false)
  const Recalllist=async()=>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_Backend}/api/Con/getAllConversation`, {
      withCredentials: true
  });
  //console.log("here you go ",response)
  if(response.data.length>0)
  {
      SetConversations(response.data);
      
      setselectedconversation(response.data[0]._id)
  }
  }
  const Createnewchat=async()=>{
    try{
      
   if(Conversations[0].convoname!="New Chat")
      { setfirstmessage(false)
        const res=await axios.post(`${process.env.NEXT_PUBLIC_Backend}/api/Con/CreateConversation`,{
        name:"New Chat",
        id:null,
    },{
        withCredentials: true
    })
   
   
    if(res.data.length>0)
        {
            //console.log("getting in",res.data.category)
             SetConversations(prev=>[res.data[0],...prev]);
             setselectedconversation(res.data[0]._id)
             
             //console.log( res.data[0]._id)
        }}
    }
    catch(err)
    {
      //console.log("error in creating new chat", err)
    }
  }
  return (
    <>
      <div className="w-[100vw] bg-black h-[100vh]  text-[#e0e0e0] flex overflow-hidden">
        <Sidepanel sideopen={sideopen} className=" z-10 bg-[#181818] flex flex-col  items-center">
          <div className=" w-[90%]  h-[10vh] flex justify-between ">
          <img
            src="./sidebar.svg"
            alt=""
            onClick={() => {
              setsideopen(!sideopen);
            }}
            className=" cursor-pointer  lg:w-[30px]   md:w-[80px] w-[20px] flex justify-center items-center       "
          />
         <div className=" w-[40%]  flex justify-between items-center">
         <img
            src="./search.png"
            alt=""
            className=" p-0.5 lg:w-[30px]  md:w-[30px] w-[20px]  hidden   lg:block md:visible    "
          />
         <img
            src="./newchat.svg"
            alt=""
            className=" p-0.5 lg:w-[30px]  md:w-[30px] w-[20px]  hidden   lg:block md:visible cursor-pointer    "
            onClick={()=>{Createnewchat()}}
          />
           

         </div>
            
          </div>
          <div className=" w-full h-[96vh] mt-4 bgwhite overflow-y-auto
           [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
          ">
            <ConversationList Conversations={Conversations} SetConversations={SetConversations} 
            selectedconversation={selectedconversation} setselectedconversation={setselectedconversation}
          
           />
          </div>
        </Sidepanel>


        <Mainpanel sideopen={sideopen} className=" bg-[#2b2b31] ">
          <Nav sideopen={sideopen} setsideopen={setsideopen} /> 
          <Conversationpanel selectedconversation={selectedconversation}
           Conversations={Conversations} SetConversations={SetConversations} Recalllist={Recalllist}
           firstmessage={firstmessage} setfirstmessage={setfirstmessage}
           />
        </Mainpanel>
      </div>
    </>
  );
};
export default Page;
