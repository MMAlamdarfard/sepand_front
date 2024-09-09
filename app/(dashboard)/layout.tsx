import type { GetServerSideProps, Metadata } from "next";
import { Reem_Kufi_Ink } from "next/font/google";
import localFont from 'next/font/local'
import "./../globals.css";
import Sidebar from "@/components/Sidebar";
import Providers from "./provider";

import NavBar from "@/components/Nav";
import { Bounce, ToastContainer } from "react-toastify";
import { NextResponse } from "next/server";



const vazir = localFont({
  src: '../../public/font/Vazir.woff', 

})

export const metadata: Metadata = {
  title: "پنل مدیریت",
  description: "پنل مدیریت سپند",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  
  return (
    <html lang="fa" dir="rtl" >
      
      
      <body className={vazir.className}>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
        
          pauseOnFocusLoss
          draggable
         pauseOnHover
        theme="light"
          transition={Bounce}
   />
   
      <Providers>
        
         <div className="flex flex-row bg-lightBackground min-h-screen">
        
          <Sidebar/>
          <div className="flex-1 flex flex-col">
            <NavBar/>
            <div className="flex-1 mr-64">{children}</div>
          </div>
          
        </div>
      </Providers>
     
      </body>
      
    </html>
  );
}
