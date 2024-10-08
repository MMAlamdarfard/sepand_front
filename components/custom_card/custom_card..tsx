'use client';

import NavBar from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import { NextUIProvider } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CustomCards = ({ children }: { children: React.ReactNode }) => {

  const [isOpen,setIsOpen]=useState(false)

  return (
  <div className="flex flex-row bg-lightBackground min-h-screen">
        
  <Sidebar open={isOpen} onOpen={setIsOpen}/>
  <div onClick={()=>{setIsOpen(false)}} className={`fixed flex h-full w-full transition-all duration-400 bg-black  ${isOpen?"opacity-40 lg:opacity-0  z-20":" z-10 opacity-0"}`}/>
  <div className="flex-1 flex flex-col">
  
  <div className="flex-1 z-10 lg:mr-64 mr-0 lg:mt-14 mt-10 transition-all duration-400">{children}</div>
    
      
   
    
  </div>
  
</div>);
};

export default CustomCards;
