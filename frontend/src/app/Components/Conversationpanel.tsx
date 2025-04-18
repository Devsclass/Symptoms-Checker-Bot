import React,{useState} from 'react'
import ChatInput from './ChatInput'
type Props = {}

function Conversationpanel({}: Props) {
    const [firstmessage,setfirstmessage]=useState<boolean>(false)
    
    const handelsubmission=()=>{
        setfirstmessage(true)
    }
  return (
    <div className= {`w-full h-full bg-amber-50 flex flex-col relative items-center transition-all duration-300 ease-in-out justify-center`}>
        <div className={`w-full h-[100px]  transition-all duration-300 ease-in-out absolute ${firstmessage?"  lg:translate-y-45 translate-y-55":""}`} onKeyUp={()=>handelsubmission()}>
          <ChatInput />
        </div>
    </div>
  )
}

export default Conversationpanel