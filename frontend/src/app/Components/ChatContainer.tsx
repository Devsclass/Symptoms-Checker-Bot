import axios from 'axios'
import React,{useEffect, useState} from 'react'

type Props = {
    chats:any
}

const ChatContainer = (props: Props) => {
    
    
   
  return (
    <div className='w-[60%] h-[76vh] mt-1 pb-7  rounded-2xl overflow-y-scroll '>
         {
           props.chats.map((item:any,index:number)=>{
                return(
                  
                    <div key={index} className={` chat ${item.role=="user"?"chat-receiver":"chat-sender"}`}>
                     <div className="chat-bubble bg-primary ">{item.content}</div>
                   </div>
                  
                )
            })
         }
    </div>
  )
}

export default ChatContainer