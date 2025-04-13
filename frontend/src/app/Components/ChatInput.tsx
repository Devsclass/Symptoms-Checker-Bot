import React from 'react'

type Props = {
    selectcon:string,
    setselectedcon: React.Dispatch<React.SetStateAction<string>>,
    className:string
}

const ChatInput = (props: Props) => {
  return (
    <div 
    className={`
      flex-1 flex justify-center items-center bg-black w-full 
      transition-all duration-500 ease-in-out 
      ${props.selectcon === "" ? "translate-y-0 opacity-100 relative" : "translate-y-[calc(20vh-20vh)] opacity-100 absolute bottom-5 h-[20vh]"}
      ${props.className}
    `}
  >
        <button onClick={()=>props.selectcon==""? props.setselectedcon("s"):props.setselectedcon("")}>
        ChatInput
        </button></div>
  )
}
export default ChatInput