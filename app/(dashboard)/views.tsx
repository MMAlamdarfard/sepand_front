'use client';

import NavBar from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import { NextUIProvider } from '@nextui-org/react';
import localFont from 'next/font/local';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 
const vazir = localFont({
  src: '../../public/font/Vazir-FD-WOL.woff', 

})


const MyViews = ({ children }: { children: React.ReactNode }) => {

  const [isOpen,setIsOpen]=useState(false)
  const [shouldApplyClass, setShouldApplyClass] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldApplyClass(true); // Immediately add the class when open
    } else {
      const timer = setTimeout(() => {
        setShouldApplyClass(false); // Remove the class after the delay
      }, 400); // Delay before removing the class (400ms)
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [isOpen]);
  return (
  <div className="flex flex-row bg-lightBackground min-h-screen">
    <ToastContainer
       
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
 />     
  <Sidebar open={isOpen} onOpen={setIsOpen}/>
  
  <div onClick={()=>{setIsOpen(false)}} className={`fixed flex h-full w-full transition-all duration-400 bg-black ${shouldApplyClass?"":"hidden"}  ${isOpen?"opacity-40 lg:opacity-0 z-40":" z-30 opacity-0"}`}/>
  <div className="flex-1 flex flex-col">
  <NavBar onOpen={setIsOpen} open={isOpen}/>
  <div className={`flex-1  lg:mr-64 mr-0 lg:mt-14 mt-10 transition-all duration-400`}>{children}</div>
    
      
   
    
  </div>
  
</div>);
};

export default MyViews;
