import React,{useState,useEffect} from 'react'
import ChatInput from './ChatInput'
import axios from 'axios'
import ChatContainer from './ChatContainer'
type Props = {
  selectedconversation:string
}

 function Conversationpanel(props: Props) {
    const [firstmessage,setfirstmessage]=useState<boolean>(false)
    const [message,setmessage]=useState<string>("")
    const [aires,setaires]=useState("")
    const [chats,setchats]=useState<any>([]);

    useEffect(()=>{
      const fetchats=async()=>{
              const re=await axios.post("http://localhost:8080/api/Chat/GetAllChats",{
                  conversation_id:props.selectedconversation
              },{
                  withCredentials:true,
              })
              console.log(re.data.data)
              setchats(re.data.data)
              if(re.data.data.length>0)
              {
                  setfirstmessage(true)
              }
             }
             if(props.selectedconversation!="")
             {
                 fetchats()
             }
      
           },[props.selectedconversation])





    const handelsubmission=async(e:React.KeyboardEvent)=>{
       if(e.key=="Enter")
       {
        chats.push({content:message , role:"user"})
        setmessage("")
        setfirstmessage(true)
        const re=await axios.post("http://localhost:8080/api/Chat/CreateChat", {
          message:message,
          id:null,
          conversation_id:props.selectedconversation
      }
    ,{  withCredentials: true,});
  
           if(re.data)
           {
             setchats((prev)=>[...prev,{content:re.data.content,role:re.data.role}])
           
           }
       }
     
    }
  return (
    <div className= {`w-full h-full flex flex-col relative  transition-all duration-300 ease-in-out justify-center`}>
      {
            <div className='w-full h-full flex justify-center items-start pb-2'>
              <ChatContainer chats={chats} />
           </div>
      }
        <div className={`w-full h-[100px]  transition-all duration-300 ease-in-out absolute ${firstmessage?"  lg:translate-y-45 translate-y-55":""}`} >
         
          
          <ChatInput selectedconversation={props.selectedconversation} handelsubmission={handelsubmission}
          message={message} setmessage={setmessage}
          />
        </div>
    </div>
  )
}

export default Conversationpanel