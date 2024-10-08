import type { GetServerSideProps, Metadata } from "next";
import { Reem_Kufi_Ink } from "next/font/google";
import localFont from 'next/font/local'
import "./../globals.css";
import Sidebar from "@/components/Sidebar";
import Providers from "./provider";

import NavBar from "@/components/Nav";
import { Bounce, ToastContainer } from "react-toastify";
import { NextResponse } from "next/server";
import Views from "./views";



const vazir = localFont({
  src: '../../public/font/Vazir-FD-WOL.woff', 

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
    
   
      <Providers>
        <Views>
          {children}
        </Views>
      </Providers>
     
      </body>
      
    </html>
  );
}
