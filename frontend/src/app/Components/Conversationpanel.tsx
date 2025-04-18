import React,{useState} from 'react'
import ChatInput from './ChatInput'
import axios from 'axios'
type Props = {
  selectedconversation:string
}

 function Conversationpanel(props: Props) {
    const [firstmessage,setfirstmessage]=useState<boolean>(false)
    const [message,setmessage]=useState<string>("")
    const handelsubmission=async(e:React.KeyboardEvent)=>{
       if(e.key=="Enter")
       {
        setfirstmessage(true)
        const re=await axios.post("http://localhost:8080/api/Chat/CreateChat", {
          message:message,
          id:null,
          conversation_id:props.selectedconversation
      }
    ,{  withCredentials: true,});
    console.log(re)
       }
     
    }
  return (
    <div className= {`w-full h-full bg-amber-50 flex flex-col relative items-center transition-all duration-300 ease-in-out justify-center`}>
        <div className={`w-full h-[100px]  transition-all duration-300 ease-in-out absolute ${firstmessage?"  lg:translate-y-45 translate-y-55":""}`} >
          <ChatInput selectedconversation={props.selectedconversation} handelsubmission={handelsubmission}
          message={message} setmessage={setmessage}
          />
        </div>
    </div>
  )
}

export default Conversationpanel