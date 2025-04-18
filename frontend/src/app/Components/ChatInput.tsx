import React,{useState} from 'react'

type Props = {
  selectedconversation:string
  handelsubmission:(e:React.KeyboardEvent)=>void
  message:string,
  setmessage:React.Dispatch<React.SetStateAction<string>>
}

const ChatInput = (props: Props) => {

  return (
<div className=' w-full h-full  flex justify-center items-center'>
    <input
     placeholder='Ask something'
     className=' w-[60%] h-[90%] bg-gray-700 rounded-2xl'
     onKeyDown={(e)=>props.handelsubmission(e)}
     value={props.message}
     onChange={(e)=>props.setmessage(e.target.value)}
    />
</div>
  )
}
export default ChatInput