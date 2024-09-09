import type { GetServerSideProps, Metadata } from "next";
import { Reem_Kufi_Ink } from "next/font/google";
import localFont from 'next/font/local'
import "./../globals.css";

import Providers from "@/app/(dashboard)/provider";

import { Bounce, ToastContainer } from "react-toastify";

const vazir = localFont({
  src: '../../public/font/Vazir.woff', 

})
// "start": "next start",
export const metadata: Metadata = {
  title: "ورود به پنل",
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
        
        {children}
      
      </Providers>
      </body>
    </html>
  );
}
