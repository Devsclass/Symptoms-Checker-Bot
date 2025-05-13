import React from 'react'
import { Chattype } from './Types'
type Props = {
    chats:Chattype[]
}

const ChatContainer = (props: Props) => {
    
    
   
  return (
    <div className='w-[60%] h-[76vh] mt-1 pb-7  rounded-2xl overflow-y-scroll '>
         {
           props.chats.map((item:Chattype,index:number)=>{
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