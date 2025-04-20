import React,{useState,useEffect} from 'react'
import ChatInput from './ChatInput'
import axios from 'axios'
import ChatContainer from './ChatContainer'
import {Convertype,Chattype} from './Types'
type Props = {
  selectedconversation:string,
  SetConversations:React.Dispatch<React.SetStateAction<Convertype[]>>,
  Conversations:Convertype[]
  Recalllist:()=>void
      firstmessage:boolean,
      setfirstmessage:React.Dispatch<React.SetStateAction<boolean>>
}

 function Conversationpanel(props: Props) {
   
    const [message,setmessage]=useState<string>("")
    const [aires,setaires]=useState("")
    const [chats,setchats]=useState<Chattype[]>([]);

    useEffect(()=>{
      const fetchats=async()=>{
              const re=await axios.post(`${process.env.NEXT_PUBLIC_Backend}/api/Chat/GetAllChats`,{
                  conversation_id:props.selectedconversation
              },{
                  withCredentials:true,
              })
              //console.log(re.data.data)
              setchats(re.data.data)
              if(re.data.data.length>0)
              {
                  props.setfirstmessage(true)
              }
             }
             if(props.selectedconversation!="")
             {
                 fetchats()
             }
      
           },[props.selectedconversation])





    const handelsubmission=async(e:React.KeyboardEvent)=>{
       if(e.key=="Enter" && props.selectedconversation)
       {
        const newChat: Chattype = { content: message, role: "user", userid: "some_user_id", Conid: props.selectedconversation };
    setchats((prevChats) => [...prevChats, newChat]);
        
        const usermsg=message;
        setmessage("")
        const isitnew=props.firstmessage;
       props. setfirstmessage(true)
        const re=await axios.post(`${process.env.NEXT_PUBLIC_Backend}/api/Chat/CreateChat`, {
          message:message,
          id:null,
          conversation_id:props.selectedconversation
      }
                             ,{  withCredentials: true,});
  
           if(re.data)
           {
             const cc=chats;
             console.log(cc)
             setchats((prev:any)=>[...prev,{content:re.data.content,role:re.data.role}])
             if(cc.length<2)
              {
           
                 const title=await axios.post("http://localhost:8080/api/Con/Gentitles",{
                   usermsg:usermsg,
                   aimsg :re.data.content,
                   conlist:props.Conversations,
                   ccon:props.selectedconversation,
                   id:null
                 },{
                   withCredentials:true
                 })
                 //console.log("its the title ",title.data)
                 props.Recalllist()

              }
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
        <div className={`w-full h-[100px]  transition-all duration-300 ease-in-out absolute ${props.firstmessage?"  lg:translate-y-45 translate-y-55":""}`} >
         
          
          <ChatInput selectedconversation={props.selectedconversation} handelsubmission={handelsubmission}
          message={message} setmessage={setmessage}
          />
        </div>
    </div>
  )
}

export default Conversationpanel