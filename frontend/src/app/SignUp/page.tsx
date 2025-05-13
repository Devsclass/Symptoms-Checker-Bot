"use client";
import React, { useEffect, useState ,ReactNode} from "react";
import Link from "next/link";
import axios from "axios";
import {useRouter} from 'next/navigation'


type pageProps = {};
type Rowsprop = {
  children: ReactNode;
  className: string;
};
const Rows = ({ children, className = "" }: Rowsprop) => {
  return (
    <div
      className={`w-full  g-black flex justify-center items-center  ${className}`}
    >
      {children}
    </div>
  );
};

const Eye = ({
  showpass,
  setshowpass,
}: {
  showpass: boolean;
  setshowpass: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return showpass ? (
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={() => {
        setshowpass(!showpass);
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  ) : (
    <svg
      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={() => {
        setshowpass(!showpass);
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};


const page: React.FC<pageProps> = () => {
  const [showpass, setshowpass] = useState<boolean>(false);
  const [showconfpass, setshowconfpass] = useState<boolean>(false);
  const [message,setmessage]=useState<string>("  Only login via email, Google, or +86 phone number login is supported in your region.")
  const [term, setterm] = useState(true);
  const [error,seterror]=useState<boolean>(false)

  //form states
  const [Username,setusername]=useState<string>("")
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [ConfrimPass,setConfirmpas]=useState<string>("")
  const [passmatch,setpassmatch]=useState<boolean>()
 const router = useRouter()





  useEffect(()=>{
    console.log("running")
    if(ConfrimPass!="" && ConfrimPass!==Password)
    {
       console.log("not matched")
       setpassmatch(false)
    }
    else if( ConfrimPass===Password){
        console.log("matched")
        setpassmatch(true)
    }
  },[ConfrimPass,Password])

  const Submit = async () => {
     try{
      const re = await axios.post(`${process.env.NEXT_PUBLIC_Backend}/api/users/createUser`, {
          username:Username,
          email: Email,
          password: Password,
        },
      {
        withCredentials:true,
      });
        console.log(re)
        router.push("/Login")
     }
     catch(err )
     {
      console.log((err as any)?.response?.data?.message || "Something went wrong")
      setmessage((err as any)?.response?.data?.message || "Something went wrong")
      seterror(true)
     }
   
  };
  



  return (
    <div className=" h-[100vh] lg:h-[120vh] md:h-[100vh] w-full bg-[#2b2b31] flex justify-center items-center sm:items-center lg:items-center">
      <form
      onSubmit={(e)=>{
        e.preventDefault(); 
        Submit()
    }}
        className="bg-te w-full h-[90%]      md:w-[50%] md:h-[90%] lg:w-[30%] lg:h-[90%] flex flex-col items-center gap-2   justify-around
     "
      >
           <Rows className=" flex-1">
            <Link href={"/"} legacyBehavior>
                <img
                src="/next.svg"
                className="  p-3 cursor-pointer   max-w-[140px] md:max-w-[190px] lg:max-w-[150px]"
                />
            </Link>
            </Rows>

            <Rows className=" flex-1 ">
            <p className=  {`w-[90%] text-center text-sm ${error?"text-red-500":"text-white"}  `}>
              {message}
            </p>
            </Rows>

            <Rows className="flex-1 ">
            <div className="relative w-[80%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"     className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

                <input
                type="text"
                value={Username}
                onChange={(e) =>{ setusername(e.target.value)}}
                placeholder="UserName"
                required
                className=" text-white w-full pl-10 py-2 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400"
                />
            </div>
            </Rows>
            <Rows className="flex-1 ">
            <div className="relative w-[80%]">
                <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
                </svg>
                <input
                type="email"
                value={Email}
                onChange={(e) =>{ setEmail(e.target.value)}}
                placeholder="Email"
                required
                className=" text-white w-full pl-10 py-2 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400"
                />
            </div>
            </Rows>

            <Rows className=" flex-1 ">
            <div className="relative w-[80%]">
                <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
                </svg>
                <input
                type={showpass ? "text" : "password"}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
                className=" text-white w-full pl-10 pr-10 py-2 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400"
                />
                <Eye showpass={showpass} setshowpass={setshowpass} />
            </div>
            </Rows>

            
            <Rows className=" flex-1 ">
            <div className="relative w-[80%]">
                <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
                </svg>
                <input
                type={showconfpass ? "text" : "password"}
                value={ConfrimPass}
                onChange={(e) =>{
                  
                    setConfirmpas (e.target.value)
                  
                }}
                placeholder="Confirm password"
                required
                className={` text-white w-full pl-10 pr-10 py-2 border-2  rounded-2xl focus:outline-none ${!passmatch && ConfrimPass!=="" && Password!==""  ? `border-red-400`:`border-gray-200  focus:border-blue-400`} `}
                />
                <Eye showpass={showconfpass} setshowpass={setshowconfpass} />
            </div>
            </Rows>

            <Rows className=" flex-0.5">
            <div className="w-[90%]  flex items-center space-x-2 text-white text-sm">
                {/* Custom Rectangular Radio */}
                <label className="relative flex items-center cursor-pointer">
                <input
                    type="radio"
                    name="custom-radio"
                    className="hidden peer"
                    onChange={() => setterm(!term)}
                    required
                    onClick={() => {
                    setterm(!term);
                    }}
                    checked={term}
                />
                <div className="w-4 h-4 border-2 border-gray-300 peer-checked:bg-blue-500 peer-checked:border-blue-500 rounded-md">
                    {term && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3.5}
                        stroke="currentColor"
                        className="size-3 text-white"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                        />
                    </svg>
                    )}
                </div>
                </label>

                {/* Terms and Privacy */}
                <div className="ds-checkbox-label text-sm">
                I confirm that I have read, consent, and agree to DeepSeek's
                <a
                    href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline  mr-1"
                >
                    {" "}
                    Terms of Use
                </a>
                and
                <a
                    href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {" "}
                    Privacy Policy
                </a>
                .
                </div>
            </div>
            </Rows>
            

            <Rows className=" bg flex-1 b-white">
            <button
             type="submit"
            //     onClick={() => {
            //  if(term && passmatch)
            //  {
            //     Submit({ Email, Password })
            //  }
            //  else if(!term && passmatch)
            //  {
            //     alert("Accept our terms and condition")
            //  }
            //  else if(term && !passmatch)
            //  {
            //     alert("password and confirm password is not same")
            //  }
            //  else{
            //     alert("something is wrong with the submition")
            //  }
            //     }}
                className="rounded-md cursor-pointer bg-[#39aefb] hover:bg-blue-500    w-[90%] py-2 px-4 border border-transparent text-center text-lg  text-white font-bold transition-all shadow-md hover:shadow-lg focus:shadow-none  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 ease-in-out"
             
            >
                SignUp
            </button>
            </Rows>

            <Rows className="  flex-0.5">
            <div className="  w-[90%] flex justify-center items-center text-md text-blue-500 ">
                <Link href={"/SingUp"} className="  hover:underline cursor-pointer">
                Singup
                </Link>
               
            </div>
            </Rows>

            <Rows className=" bgwhite flex-1 b-white">
            <button
                aria-label="Sign in with Google"
                className="flex w-[90%] h-[50%] md:h-[50%] lg:h-[70%]   justify-center items-center cursor-pointer bg-white border border-[#dadce0] rounded-lg p-0.5 pr-3"          >
                <div className="flex items-center justify-center bg-white  flex-1 rounded-l">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-9 "
                >
                    <title>Sign in with Google</title>
                    <desc>Google G Logo</desc>
                    <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    className="fill-[#4285f4]"
                    ></path>
                    <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    className="fill-[#34a853]"
                    ></path>
                    <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    className="fill-[#fbbc05]"
                    ></path>
                    <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    className="fill-[#ea4335]"
                    ></path>
                </svg>
                </div>
                <span className="text-lg font-bold text-[#3c4043] flex-4 tracking-wider">
                Sign in with Google
                </span>
            </button>
            </Rows>


      </form>
    </div>
  );
};
export default page;
