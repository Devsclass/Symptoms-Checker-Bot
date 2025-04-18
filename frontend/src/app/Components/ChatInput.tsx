import React from 'react'

type Props = {
 
}

const ChatInput = (props: Props) => {
  return (
<div className=' w-full h-full  flex justify-center items-center'>
    <input
    placeholder='Ask something'
     className=' w-[60%] h-[90%] bg-gray-700 rounded-2xl'
    />
</div>
  )
}
export default ChatInput