"use client"
import SvgAnimation from '@/components/Nav';
import RectangleAnimation from '@/components/Nav';
import Sidebar from '@/components/Sidebar'
import { Children, use, useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.png'
import { Button, Input } from '@nextui-org/react';
import usePostLogin from '@/Api/login/hooks/post_login';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [logged,setIsLogged] =useState<boolean>(false);
  const [errorPassword,setErrorPassword] =useState<string|null>(null); 
  const [password,setPassword] =useState<string|null>(null); 

  const [errorPhone,setErrorPhone] =useState<string|null>(null);
  const [phone,setPhone] =useState<string|null>(null); 
  const router = useRouter()
  let login = usePostLogin({
    deps:[logged],
    pass:password,
    phone:phone,
    error:(err)=>{
       console.log(err)
       let errorMessage = err?.response?.data?.message??"خطای سرور لطفا منتظر بمانید" 
      
       setErrorPassword(errorMessage)
       setErrorPhone(errorMessage)
    },
    success:()=>{
     router.push("/")
    }
  })
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => setIsVisible(!isVisible);
  const HandleLogin = () => {
    let haveError = false;
    if(password==null|| password?.length==0){
       setErrorPassword("لطفا رمز عبور خود را وارد کنید")
       haveError =true;
    }
    if(phone==null|| phone?.length==0){
      setErrorPhone("لطفا تلفن همراه خود را وارد کنید") 
      haveError = true;
    }
    if(haveError){
      return
    }
    setIsLogged((prev)=>!prev)
  };
   
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
       <div className=' border-[0.5px]    border-gray-400  flex flex-col md:flex-row   w-[calc(100%-15px)]  h-[500px]    md:h-3/4 md:w-3/5  bg-gray-50 rounded-lg  shadow-2xl  '>
          <div className=' md:flex  hidden justify-center items-center flex-1 bg-gradient-to-tl   from-customBlueLight rounded-r-lg  rounded-l-3xl   to-customBlueDark'>
             <Image src={logo} alt="logo" width={200} height={200} />
          </div>
          <div  className='flex-1 flex-col  flex justify-center items-center'>
             <div className='w-[350px]'>
              <h1 className=' text-2xl font-bold mb-1'> سامانه سپند</h1>
              <div className=' w-full h-[0.5px] bg-black mb-10'/> 
             <Input 
               dir='ltr'
               type="email"
               color='primary'
               variant="bordered" 
               errorMessage={errorPhone}
               isInvalid={errorPhone!=null}
               label="شماره همراه" 
               className=' mb-6'
               onFocus={()=>{
                setErrorPhone(null)
               }}
               onChange={(v)=>{
                setErrorPhone(null)
                setPhone(v.target.value)
             }}
               classNames={
                {label: "text-black/50"}
               } />
             <Input  
               dir='ltr'
               onFocus={()=>{
                 setErrorPassword(null)
               }}
               errorMessage={errorPassword}
               isInvalid={errorPassword!=null}
             
               onChange={(v)=>{
                  setErrorPassword(null)
                  setPassword(v.target.value)
               }}
               color='primary'
               variant="bordered"
               label="رمزعبور"
               endContent={
                <button className="focus:outline-none mr-3 " type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                  {!isVisible ? (
                    <FaEye  className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              
               classNames={
                {label: "text-black/50"}
               } />
              <Button onPress={
                
                 
                  HandleLogin
                
              } color="primary" size='lg' radius='sm'  className=' mt-12 w-full' isLoading={login.isLoading}>
                <h1 className=' py-3 text-white font-bold text-lg'>ورود</h1>
              </Button>  
             </div>
             
          </div>

       </div>
  </div>
  );
}